import {RegexToken} from "../RegexToken";
import {ITokenBuilder} from "../ITokenBuilder";

export class NewLineToken extends RegexToken {
    public constructor(builder: ITokenBuilder) {
        super("New line", "#ee6002", false, builder);
    }

    public compile(): string {
        return "\n";
    }

    public override createInstance(): RegexToken {
        return new NewLineToken(this.builder);
    }

    public tooltip() {
        return "New line character (\\n)";
    }
}
