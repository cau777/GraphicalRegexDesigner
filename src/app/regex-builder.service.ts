import {Injectable} from '@angular/core';
import {MainToken} from "./models/tokens/MainToken";
import {LiteralToken} from "./models/tokens/LiteralToken";
import {Upper, Lower, AllChars, Digits} from "./misc/string-constants";
import {VariableReferenceToken} from "./models/tokens/VariableReferenceToken";
import {RegexOptions} from "./models/RegexOptions";
import {RegexCompiler} from "./regex-compiler";
import {RegexCompilationResult} from "./models/RegexCompilationResult";

@Injectable({
    providedIn: 'root'
})
export class RegexBuilderService {
    public variables: Map<string | "Regex", MainToken>;
    public result: RegexCompilationResult;

    private readonly options: RegexOptions;

    public constructor() {
        this.variables = new Map<string, MainToken>();
        this.defaultVariablesSetup();
        this.options = new RegexOptions();
        this.result = new RegexCompilationResult();
    }

    public generateRegex() {
        let compiler = new RegexCompiler(this.variables);
        compiler.compile(this.options);
        this.result = compiler.result;
    }

    public get userDefinedVariables() {
        let userEntries: MainToken[] = [];
        for (let entry of this.variables.values()) {
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

    private createLiteralsVariable(name: string, literals: string) {
        let children = [];

        for (let literal of literals) {
            let token = new LiteralToken();
            token.values[0] = literal;
            children.push(token)
        }

        this.variables.set(name, new MainToken(name, true, children));
    }

    public newVariable() {
        let name = this.getNewVariableName();
        this.variables.set(name, new MainToken(name, false));
        this.generateRegex();
    }

    private getNewVariableName() {
        const prefix = "New Variable ";
        let i = 1;

        while (this.variables.has(prefix + i)) i++;

        return prefix + i;
    }

    public clear() {
        this.variables.clear();
        this.defaultVariablesSetup();
        this.generateRegex();
    }

    public defaultVariablesSetup() {
        this.variables.set("Regex", new MainToken("Regex", true));
        this.createLiteralsVariable("Upper letters", Upper);
        this.createLiteralsVariable("Lower letters", Lower);
        this.createLiteralsVariable("Letters", AllChars);
        this.createLiteralsVariable("Digits", Digits);
    }

    public removeVariable(name: string) {
        const deleted = this.variables.delete(name);
        if (!deleted) throw new Error("Invalid name: " + name);

        for (let variable of this.variables.values()) {
            let children = variable.children;
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
        let references: string[] = [];
        for (let variable of this.variables.values()) {
            if (variable.allChildren.some(o => o instanceof VariableReferenceToken && o.name === name))
                references.push(variable.name);
        }
        return references;
    }

    public rename(oldName: string, newName: string) {
        let found = this.variables.get(oldName);
        if (!found) throw new Error(oldName + " was not a variable");

        if (newName === "Regex") throw new Error("Regex is a reserved name");
        if (this.variables.has(newName)) throw new Error(newName + " is already defined");

        found.name = newName;

        let newEntries: [(string | "Regex"), MainToken][] = [];
        for (let entry of this.variables.entries()) {
            if (entry[1] === found) {
                newEntries.push([newName, entry[1]]);
            } else {
                newEntries.push(entry);
            }
        }
        this.variables = new Map<string | "Regex", MainToken>(newEntries);

        for (let token of this.variables.values()) {
            for (let child of token.allChildren) {
                if (child instanceof VariableReferenceToken && child.name === oldName)
                    child.name = newName;
            }
        }
    }
}
