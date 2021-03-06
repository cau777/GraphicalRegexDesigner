import {RegexToken} from "../RegexToken";
import {ITokenBuilder} from "../ITokenBuilder";

export class GroupToken extends RegexToken {
    public constructor(builder: ITokenBuilder) {
        super("Group", "#dddf6a", true, builder);
    }

    public compile(): string {
        return "(" + this.compileAndConcatChildren() + ")";
    }

    protected createInstance(): RegexToken {
        return new GroupToken(this.builder);
    }

    public tooltip() {
        return "A container to group elements";
    }
}
