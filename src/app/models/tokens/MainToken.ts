import {RegexToken} from "../RegexToken";
import {RegexBuilderService} from "../../regex-builder.service";

export class MainToken extends RegexToken {
    public constructor(name: string) {
        super(name, "#8a8200", true);
    }

    public compile(builder: RegexBuilderService): string {
        return this.compileAndConcatChildren(builder);
    }

    protected createInstance(): RegexToken {
        return new MainToken(this.name);
    }

}
