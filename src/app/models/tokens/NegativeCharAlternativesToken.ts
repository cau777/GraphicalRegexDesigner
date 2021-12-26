import {RegexToken} from "../RegexToken";
import {AlternativesToken} from "./AlternativesToken";
import {RegexCompiler} from "../../regex-compiler";

export class NegativeCharAlternativesToken extends AlternativesToken {
    public constructor() {
        super("None of characters", "#f285bc", true);
    }

    public compile(builder: RegexCompiler): string {
        if (this.children.length === 0)
            throw this.mustHaveChildren();

        return "[^" + this.simplify(this.compileAndConcatUnique(builder)) + "]";
    }

    protected createInstance(): RegexToken {
        return new NegativeCharAlternativesToken();
    }
}
