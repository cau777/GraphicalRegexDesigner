import {Injectable} from '@angular/core';
import {IExpressionSaveData, ITokenSaveData} from "./models/SaveData";
import {RegexBuilderService} from "./regex-builder.service";
import {MainToken} from "./models/tokens/MainToken";
import {CommonTokens} from "./misc/tokens-constants";
import {RegexToken} from "./models/RegexToken";
import {VariableReferenceToken} from "./models/tokens/VariableReferenceToken";

type PossibleKeys = "firstTime" | "expressions";

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    public readonly firstTime: boolean;
    public expressions: IExpressionSaveData[];

    private tokensConstructors = new Map(CommonTokens.map(o => [o.name, o]));

    public constructor() {
        this.firstTime = window.localStorage.getItem("firstTime") === null;

        if (this.firstTime) {
            window.localStorage.setItem("firstTime", "n");
            this.setJson("expressions", []);
        }

        this.expressions = this.getJson<IExpressionSaveData[]>("expressions") ?? [];
    }

    public saveExpression(name: string, builder: RegexBuilderService) {
        let index = this.expressions.findIndex(o => o.name === name);
        if (index === -1) index = this.expressions.length;

        const variablesToSave = Array.from(builder.variables.values()).filter(o => !o.isPredefined || o.name === "Regex");

        this.expressions[index] = {
            name: name,
            size: variablesToSave.map(o => o.allChildren.length).reduce((acc, curr) => acc + curr, 0),
            lastModified: new Date().toString(),
            options: builder.options,
            variables: variablesToSave.map(o => this.getSaveData(o)),
        }

        this.setJson("expressions", this.expressions, ["builder"]);
    }

    public loadExpression(name: string, builder: RegexBuilderService) {
        const index = this.expressions.findIndex(o => o.name === name);

        if (index !== -1) {
            const expression = this.expressions[index];
            builder.clear();
            builder.options = expression.options;

            let variables = new Map(Array.from(builder.variables.entries()));
            for (let variable of expression.variables) {
                variables.set(variable.name, new MainToken(variable.name, variable.name === "Regex", builder,
                    variable.children.map(o => this.loadTokenData(o, builder))));
            }
            builder.variables = variables;
        }
    }

    private getJson<T>(key: PossibleKeys): T | undefined {
        const item = window.localStorage.getItem(key);
        if (item === null) return undefined;

        return JSON.parse(item);
    }

    private setJson<T>(key: PossibleKeys, value: T, ignoredFields?: string[]) {
        let replacer: ((key: string, value: any) => any) | undefined = undefined;

        if (ignoredFields) {
            let set = new Set(ignoredFields);
            replacer = (k, v) => {
                if (set.has(k)) return undefined;
                return v;
            };
        }

        window.localStorage.setItem(key, JSON.stringify(value, replacer));
    }

    private getSaveData(token: RegexToken): ITokenSaveData {
        return {
            type: token.constructor.name,
            name: token.name,
            values: token.values,
            children: token.children.map(o => this.getSaveData(o))
        }
    }

    private loadTokenData(token: ITokenSaveData, builder: RegexBuilderService): RegexToken {
        let TokenType = this.tokensConstructors.get(token.type);
        let result: RegexToken;

        if (TokenType) {
            result = new TokenType(builder);
        } else if (token.type === VariableReferenceToken.name) {
            result = new VariableReferenceToken(token.name, builder);
        } else {
            throw TypeError("Couldn't find type " + token.type);
        }

        result.values = token.values;
        result.children.push(...token.children.map(o => this.loadTokenData(o, builder)));
        return result;
    }
}
