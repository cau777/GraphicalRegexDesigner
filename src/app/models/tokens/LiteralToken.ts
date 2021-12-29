import {RegexToken} from "../RegexToken";
import {escapeRegexp} from "ngx-bootstrap/typeahead";
import {ITokenBuilder} from "../ITokenBuilder";

export class LiteralToken extends RegexToken {
    public constructor(builder: ITokenBuilder) {
        super("Literal \n{}","#56a75c", false, builder);
    }

    public compile(): string {
        if (!this.values[0]) throw this.cantBeEmpty();
        return escapeRegexp(this.values[0]);
    }

    protected createInstance(): RegexToken {
        return new LiteralToken(this.builder);
    }

    public tooltip() {
        if (this.values[0])
            return "Matches '" + this.values[0] + "'";
        return "Matches the specified symbols";
    }
}
