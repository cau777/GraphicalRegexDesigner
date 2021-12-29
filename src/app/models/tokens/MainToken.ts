import {RegexToken} from "../RegexToken";
import {ITokenBuilder} from "../ITokenBuilder";

export class MainToken extends RegexToken {
    public isPredefined: boolean;

    public constructor(name: string, isPredefined: boolean, builder: ITokenBuilder, children: RegexToken[] = []) {
        super(name, "#8a8200",true, builder, children);
        this.isPredefined = isPredefined;
    }

    public compile(): string {
        return this.compileAndConcatChildren();
    }

    protected createInstance(): RegexToken {
        return new MainToken(this.name, this.isPredefined, this.builder);
    }

    public tooltip() {
        return undefined;
    }

    public get allChildren() {
        const result: RegexToken[] = [];
        this.allChildrenRecursive(this, result);
        return result;
    }

    private allChildrenRecursive(current: RegexToken, list: RegexToken[]) {
        list.push(...current.children)

        for (const child of current.children) {
            this.allChildrenRecursive(child, list);
        }
    }
}
