import {RegexToken} from "../RegexToken";
import {RegexCompiler} from "../../regex-compiler";

export class MainToken extends RegexToken {
    public isPredefined: boolean;

    public constructor(name: string, isPredefined: boolean, children: RegexToken[] = []) {
        super(name, "#8a8200", true, children);
        this.isPredefined = isPredefined;
    }

    public compile(builder: RegexCompiler): string {
        return this.compileAndConcatChildren(builder);
    }

    protected createInstance(): RegexToken {
        return new MainToken(this.name, this.isPredefined);
    }

    public get allChildren() {
        let result: RegexToken[] = [];
        this.allChildrenRecursive(this, result);
        return result;
    }

    private allChildrenRecursive(current: RegexToken, list: RegexToken[]) {
        list.push(...current.children)

        for (let child of current.children) {
            this.allChildrenRecursive(child, list);
        }
    }
}
