import {RegexToken} from "../RegexToken";
import {escapeRegexp} from "ngx-bootstrap/typeahead";
import {RegexBuilderService} from "../../regex-builder.service";

export class LiteralToken extends RegexToken {
    public constructor() {
        super("Literal \n{}", "#56a75c", false);
    }

    public compile(builder: RegexBuilderService): string {
        if (!this.values[0]) throw this.cantBeEmpty();
        let result = escapeRegexp(this.values[0]);
        if (builder.escapeBackslash) result = result.replace(/\\/g, "\\\\");
        return result;
    }

    protected createInstance(): RegexToken {
        return new LiteralToken();
    }
}
