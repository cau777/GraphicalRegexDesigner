import {RegexToken} from "../RegexToken";
import {RegexBuilderService} from "../../regex-builder.service";

export class GroupToken extends RegexToken{
    public constructor() {
        super("Group", "#dddf6a", true);
    }

    public compile(builder: RegexBuilderService): string {
        return "(" + this.compileAndConcatChildren(builder) + ")";
    }

    protected createInstance(): RegexToken {
        return new GroupToken();
    }
}
