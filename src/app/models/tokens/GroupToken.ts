import {RegexToken} from "../RegexToken";
import {RegexCompiler} from "../../regex-compiler";

export class GroupToken extends RegexToken{
    public constructor() {
        super("Group", "#dddf6a", true);
    }

    public compile(builder: RegexCompiler): string {
        return "(" + this.compileAndConcatChildren(builder) + ")";
    }

    protected createInstance(): RegexToken {
        return new GroupToken();
    }
}
