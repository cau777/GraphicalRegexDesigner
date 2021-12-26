import {RegexToken} from "../RegexToken";
import {escapeRegexp} from "ngx-bootstrap/typeahead";
import {RegexCompiler} from "../../regex-compiler";

export class LiteralToken extends RegexToken {
    public constructor() {
        super("Literal \n{}", "#56a75c", false);
    }

    public compile(builder: RegexCompiler): string {
        if (!this.values[0]) throw this.cantBeEmpty();
        return escapeRegexp(this.values[0]);
    }

    protected createInstance(): RegexToken {
        return new LiteralToken();
    }
}
