import {RegexToken} from "../RegexToken";
import {RegexBuilderService} from "../../regex-builder.service";

export class TermsAlternativesToken extends RegexToken {
    public constructor() {
        super("One of terms", "#87cbff", true);
    }

    public compile(builder: RegexBuilderService): string {
        if (this.children.length === 0)
            throw this.mustHaveChildren();

        if (this.children.length === 1)
            throw this.atLeast2Children();

        return "(" + this.children.map(o => o.compile(builder)).join("|") + ")";
    }

    protected createInstance(): RegexToken {
        return new TermsAlternativesToken();
    }
}
