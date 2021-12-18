import {RegexToken} from "../RegexToken";
import {escapeRegexp} from "ngx-bootstrap/typeahead";

export class LiteralToken extends RegexToken {
    public constructor() {
        super("Literal \n {}", "#56a75c", false);
    }

    public compile(): string {
        if (!this.values[0]) throw this.literalCantBeEmpty();
        return escapeRegexp(this.values[0]);
    }

    protected createInstance(): RegexToken {
        return new LiteralToken();
    }
}
