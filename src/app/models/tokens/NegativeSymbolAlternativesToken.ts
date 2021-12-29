import {RegexToken} from "../RegexToken";
import {AlternativesToken} from "./AlternativesToken";
import {ITokenBuilder} from "../ITokenBuilder";

export class NegativeSymbolAlternativesToken extends AlternativesToken {
    public constructor(builder: ITokenBuilder) {
        super("None of symbols", "#f285bc", true, builder);
    }

    public compile(): string {
        if (this.children.length === 0)
            throw this.mustHaveChildren();

        return "[^" + this.simplify(this.compileAndConcatUnique()) + "]";
    }

    protected createInstance(): RegexToken {
        return new NegativeSymbolAlternativesToken(this.builder);
    }

    public tooltip() {
        try {
            if (this.children.length !== 0)
                return "Matches a symbol if it isn't any of (" + this.simplify(this.compileAndConcatUnique()) + ")";
        } catch (e) {}

        return "Matches a symbol if it isn't present in the token's contents. Can be set using one or more literals";
    }
}
