import {RegexToken} from "../RegexToken";
import {RegexBuilderService} from "../../regex-builder.service";
import {AlternativesToken} from "./AlternativesToken";

export class NegativeCharAlternativesToken extends AlternativesToken {
    public constructor() {
        super("None of characters", "#f285bc", true);
    }

    public compile(builder: RegexBuilderService): string {
        if (this.children.length === 0)
            throw this.mustHaveChildren();

        return "[^" + this.simplify(this.compileAndConcatUnique(builder)) + "]";
    }

    protected createInstance(): RegexToken {
        return new NegativeCharAlternativesToken();
    }
}
