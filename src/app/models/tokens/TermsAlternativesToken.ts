import {RegexToken} from "../RegexToken";
import {ITokenBuilder} from "../ITokenBuilder";

export class TermsAlternativesToken extends RegexToken {
    public constructor(builder: ITokenBuilder) {
        super("One of terms", "#87cbff", true, builder);
    }

    public compile() {
        if (this.children.length === 0)
            throw this.mustHaveChildren();

        if (this.children.length === 1)
            throw this.atLeast2Children();

        return "(" + this.children.map(o => o.compile()).join("|") + ")";
    }

    protected createInstance(): RegexToken {
        return new TermsAlternativesToken(this.builder);
    }

    public tooltip() {
        if (this.children.length > 1)
            return "Matches one of '" + this.children.map(o => o.compile()).join("', '") + "'";

        return "Matches one of its immediate children. Groups can be used to join multiple tokens in a single child";
    }
}
