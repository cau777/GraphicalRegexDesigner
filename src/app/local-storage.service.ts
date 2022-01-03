import {Injectable} from '@angular/core';
import {IExpressionSaveData} from "./models/SaveData";
import {RegexBuilderService} from "./regex-builder.service";

type PossibleKeys = "firstTime" | "expressions";

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    public readonly firstTime: boolean;
    public expressions: IExpressionSaveData[];

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

        this.expressions[index] = {
            name: name,
            lastModified: new Date(),
            options: builder.options,
            variables: Array.from(builder.variables.values()).filter(o => !o.isPredefined || o.name === "Regex"),
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
                variables.set(variable.name, variable);
            }
            builder.variables = variables;
        }

        return index;
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
}
