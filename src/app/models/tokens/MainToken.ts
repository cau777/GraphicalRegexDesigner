import {RegexToken} from "../RegexToken";
import {RegexBuilderService} from "../../regex-builder.service";

export class MainToken extends RegexToken {
    public isPredefined: boolean;

    public constructor(name: string, isPredefined: boolean, children: RegexToken[] = []) {
        super(name, "#8a8200", true, children);
        this.isPredefined = isPredefined;
    }

    public compile(builder: RegexBuilderService): string {
        return this.compileAndConcatChildren(builder);
    }

    protected createInstance(): RegexToken {
        return new MainToken(this.name, this.isPredefined);
    }
}
