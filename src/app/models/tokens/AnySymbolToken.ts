import {RegexToken} from "../RegexToken";
import {ITokenBuilder} from "../ITokenBuilder";

export class AnySymbolToken extends RegexToken {
    public constructor(builder: ITokenBuilder) {
        super("Any symbol","#4f84ec", false, builder);
    }

    public compile(): string {
        return ".";
    }

    protected createInstance(): RegexToken {
        return new AnySymbolToken(this.builder);
    }

    public tooltip() {
        return "Matches every symbol except new line";
    }
}
