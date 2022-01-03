import {Injectable} from '@angular/core';
import {MainToken} from "./models/tokens/MainToken";
import {LiteralToken} from "./models/tokens/LiteralToken";
import {Upper, Lower, AllChars, Digits} from "./misc/string-constants";
import {VariableReferenceToken} from "./models/tokens/VariableReferenceToken";
import {RegexOptions} from "./models/RegexOptions";
import {RegexCompiler} from "./regex-compiler";
import {RegexCompilationResult} from "./models/RegexCompilationResult";
import {IReadOnlyMap} from "./models/interfaces/IReadOnlyMap";

@Injectable({
    providedIn: 'root'
})
export class RegexBuilderService {
    public variables!: IReadOnlyMap<string, MainToken>;
    public result: RegexCompilationResult;
    public compiler: RegexCompiler;
    public options: RegexOptions;

    public constructor() {
        this.defaultVariablesSetup();
        this.options = new RegexOptions();
        this.result = new RegexCompilationResult();
        this.compiler = new RegexCompiler(this.variables);
    }

    public generateRegex() {
        this.compiler = new RegexCompiler(this.variables);
        this.compiler.compile(this.options);
        this.result = this.compiler.result;
    }

    public get userDefinedVariables() {
        const userEntries: MainToken[] = [];
        for (const entry of this.variables.values()) {
            if (!entry.isPredefined)
                userEntries.push(entry);
        }
        return userEntries;
    }

    public get mainRegexToken() {
        return this.variables.get("Regex")!;
    }

    public set assertStart(value: boolean) {
        this.options.assertStart = value;
        this.generateRegex();
    }

    public set assertEnd(value: boolean) {
        this.options.assertEnd = value;
        this.generateRegex();
    }

    public set escapeBackslash(value: boolean) {
        this.options.escapeBackslashes = value;
        this.generateRegex();
    }

    public set onlyFirst(value: boolean) {
        this.options.onlyFirst = value;
        this.generateRegex();
    }

    public set caseInsensitive(value: boolean) {
        this.options.caseInsensitive = value;
        this.generateRegex();
    }

    private createLiteralsVariable(name: string, literals: string) {
        const children = [];

        for (const literal of literals) {
            const token = new LiteralToken(this);
            token.values[0] = literal;
            children.push(token)
        }

        return new MainToken(name, true, this, children);
    }

    public newVariable() {
        const name = this.getNewVariableName();
        const newEntry: [string, MainToken] = [name, new MainToken(name, false, this)];
        this.variables = new Map<string, MainToken>([...Array.from(this.variables.entries()), newEntry]);
        this.generateRegex();
    }

    private getNewVariableName() {
        const prefix = "New Variable ";
        let i = 1;

        while (this.variables.has(prefix + i)) i++;

        return prefix + i;
    }

    public clear() {
        this.defaultVariablesSetup();
        this.generateRegex();
    }

    public defaultVariablesSetup() {
        this.variables = new Map<string, MainToken>([
            ["Regex", new MainToken("Regex", true, this)],
            ["Upper letters", this.createLiteralsVariable("Upper letters", Upper)],
            ["Lower letters", this.createLiteralsVariable("Lower letters", Lower)],
            ["Letters", this.createLiteralsVariable("Letters", AllChars)],
            ["Digits", this.createLiteralsVariable("Digits", Digits)],
        ]);
    }

    public removeVariable(name: string) {
        const deleted = this.variables.get(name);
        if (!deleted) throw new Error("Invalid name: " + name);

        this.variables = new Map<string, MainToken>(Array.from(this.variables.entries()).filter(o => o[1] !== deleted));

        for (const variable of this.variables.values()) {
            const children = variable.children;
            for (let i = 0; i < children.length; i++) {
                if (children[i] instanceof VariableReferenceToken && children[i].name === name) {
                    children.splice(i, 1);
                    i--;
                }
            }
        }

        this.generateRegex();
    }

    public getVariableReferences(name: string) {
        const references: string[] = [];
        for (const variable of this.variables.values()) {
            if (variable.allChildren.some(o => o instanceof VariableReferenceToken && o.name === name))
                references.push(variable.name);
        }
        return references;
    }

    public rename(oldName: string, newName: string) {
        const found = this.variables.get(oldName);
        if (!found) throw new Error(oldName + " was not a variable");

        if (newName === "Regex") throw new Error("Regex is a reserved name");
        if (this.variables.has(newName)) throw new Error(newName + " is already defined");

        found.name = newName;

        const newEntries: [(string | "Regex"), MainToken][] = [];
        for (const entry of this.variables.entries()) {
            if (entry[1] === found) {
                newEntries.push([newName, entry[1]]);
            } else {
                newEntries.push(entry);
            }
        }
        this.variables = new Map<string | "Regex", MainToken>(newEntries);

        for (const token of this.variables.values()) {
            for (const child of token.allChildren) {
                if (child instanceof VariableReferenceToken && child.name === oldName)
                    child.name = newName;
            }
        }
    }
}
