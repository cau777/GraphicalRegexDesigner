import {RegexToken} from "../RegexToken";
import {ITokenBuilder} from "../ITokenBuilder";

export class TabToken extends RegexToken {
    public constructor(builder: ITokenBuilder) {
        super("Tab","#57db5b", false, builder);
    }

    public compile(): string {
        return "\t";
    }

    protected createInstance(): RegexToken {
        return new TabToken(this.builder);
    }

    public tooltip() {
        return "Tabulation character (\\t)";
    }
}
