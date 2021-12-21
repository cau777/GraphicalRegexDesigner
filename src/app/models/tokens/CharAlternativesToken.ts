import {RegexToken} from "../RegexToken";
import {RegexBuilderService} from "../../regex-builder.service";
import {AlternativesToken} from "./AlternativesToken";

export class CharAlternativesToken extends AlternativesToken {
    public constructor() {
        super("One of characters", "#87cbff", true);
    }

    public compile(builder: RegexBuilderService): string {
        if (this.children.length === 0)
            throw this.mustHaveChildren();

        return "[" + this.simplify(this.compileAndConcatUnique(builder)) + "]";
    }

    protected createInstance(): RegexToken {
        return new CharAlternativesToken();
    }
}
