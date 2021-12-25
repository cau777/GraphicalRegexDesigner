import {Injectable} from '@angular/core';
import {MainToken} from "./models/tokens/MainToken";
import {LiteralToken} from "./models/tokens/LiteralToken";
import {Upper, Lower, AllChars, Digits} from "./misc/string-constants";
import {DirectGraph} from "./models/DirectGraph";
import {VariableReferenceToken} from "./models/tokens/VariableReferenceToken";

@Injectable({
    providedIn: 'root'
})
export class RegexBuilderService {
    public variables: Map<string | "Regex", MainToken>;
    public result = "";
    public generalErrors: string[];
    public errors: Map<string | "Regex", string>;

    private _assertStart = false;
    private _assertEnd = false;
    private _escapeBackslash = false;
    private compiledVariables: Map<string | "Regex", string>;

    public constructor() {
        this.variables = new Map<string, MainToken>();
        this.defaultVariablesSetup();
        this.generalErrors = [];
        this.compiledVariables = new Map<string, string>();
        this.errors = new Map<string, string>();
    }

    public generateRegex() {
        this.compiledVariables.clear();
        this.errors.clear();

        let graph = this.createGraph();
        let cycles = graph.getCycles();
        let connectedVariables = cycles.filter(o => o.length > 1);

        if (connectedVariables.length > 0) {
            this.generalErrors = connectedVariables.map(o => "Variables '" + o.join("', '") + "' form a circular dependency");
            return;
        }

        let order = graph.getOrderFor("Regex");
        for (let step of order) {
            try {
                this.compiledVariables.set(step, this.variables.get(step)!.compile(this));
            } catch (e) {
                this.errors.set(step, e as string);
                return;
            }
        }

        let regex = this.getCompiledVariable("Regex");

        if (this._assertStart)
            regex = "^" + regex;

        if (this._assertEnd)
            regex += "$";

        if (this._escapeBackslash)
            regex = regex.replace(/\\/g, "\\\\");

        regex = regex.replace("\n", "\\n").replace("\t", "\\t");

        this.result = regex;
    }

    private createGraph() {
        let result = new DirectGraph<string>();
        result.addNode("Regex");

        for (let value of this.variables.values()) {
            let variables = value.allChildren.filter(o => o instanceof VariableReferenceToken);
            for (let variable of variables) {
                result.addEdge(value.name, variable.name);
            }
        }

        return result;
    }

    public getCompiledVariable(name: string) {
        let found = this.compiledVariables.get(name);
        if (found === undefined) throw new RangeError(name + " was not compiled");
        return found;
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
        this._assertStart = value;
        this.generateRegex();
    }

    public set assertEnd(value: boolean) {
        this._assertEnd = value;
        this.generateRegex();
    }

    public set escapeBackslash(value: boolean) {
        this._escapeBackslash = value;
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
        // TODO: remove invalid references
        this.generateRegex();
    }

    public rename(oldName: string, newName: string) {
        console.log("renaming " + oldName + " to " + newName)
        let found = this.variables.get(oldName);
        if (!found) throw new RangeError(oldName + " was not a variable");

        this.variables.delete(oldName);
        found.name = newName;
        this.variables.set(newName, found);

        // let l = "";
        // for (const entry of this.variables.entries()) {
        //     l += JSON.stringify(entry, undefined, 1);
        // }
        // console.log(l);

        for (let token of this.variables.values()) {
            for (let child of token.allChildren) {
                if (child instanceof VariableReferenceToken && child.name === oldName)
                    child.name = newName;
            }
        }
    }
}
