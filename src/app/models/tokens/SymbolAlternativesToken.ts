import {RegexToken} from "../RegexToken";
import {AlternativesToken} from "./AlternativesToken";
import {ITokenBuilder} from "../ITokenBuilder";

export class SymbolAlternativesToken extends AlternativesToken {
    public constructor(builder: ITokenBuilder) {
        super("One of symbols", "#87cbff", true, builder);
    }

    public compile(): string {
        if (this.children.length === 0)
            throw this.mustHaveChildren();

        return "[" + this.simplify(this.compileAndConcatUnique()) + "]";
    }

    protected createInstance(): RegexToken {
        return new SymbolAlternativesToken(this.builder);
    }

    public tooltip() {
        try {
            if(this.children.length !== 0)
                return "Matches one of (" + this.simplify(this.compileAndConcatUnique()) + ")";
        } catch (e) {}

        return "Matches one of the symbols of its content. Can be set using one or more literals";
    }
}
