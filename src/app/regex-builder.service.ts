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
    public variables: Map<string, MainToken>;
    public result = "";
    public generalErrors: string[];
    public error?: string;

    private _assertStart = false;
    private _assertEnd = false;
    private _escapeBackslash = false;

    public constructor() {
        this.variables = new Map<string, MainToken>();
        this.defaultVariablesSetup();
        this.generalErrors = [];

    }

    public generateRegex() {
        try {
            let graph = this.createGraph();
            let cycles = graph.getCycles();
            let connectedVariables = cycles.filter(o => o.length > 1);

            if (connectedVariables.length > 0) {
                this.generalErrors = connectedVariables.map(o => "Variables '" + o.join("', '") + "' form a circular dependency");
                return;
            }

            let regex = "";

            if (this._assertStart) regex += "^";

            regex += this.mainRegexToken.compile(this);

            if (this._assertEnd)
                regex += "$";

            if (this._escapeBackslash)
                regex = regex.replace(/\\/g, "\\\\");

            regex = regex.replace("\n", "\\n").replace("\t", "\\t");

            this.result = regex;
            this.error = undefined;
        } catch (e) {
            this.error = e as string;
            console.log(this.error)
        }
    }

    private createGraph() {
        let result = new DirectGraph<string>();
        for (let value of this.variables.values()) {
            result.addNode(value.name);
        }

        for (let value of this.variables.values()) {
            let variables = value.allChildren.filter(o => o instanceof VariableReferenceToken);
            for (let variable of variables) {
                result.addEdge(value.name, variable.name);
            }
        }

        // console.log(JSON.stringify(result));
        return result;
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
    }
}
