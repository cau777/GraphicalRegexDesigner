import {RegexToken} from "../RegexToken";
import {RegexBuilderService} from "../../regex-builder.service";

export class AlternativesToken extends RegexToken {
    public constructor() {
        super("One of", "#87cbff", true);
    }

    public compile(builder: RegexBuilderService): string {
        if (this.children.length === 0)
            throw this.mustHaveChildren();

        if (this.children.length === 1)
            throw this.atLeast2Children();

        let compiled = this.children.map(o => o.compile(builder));

        if (compiled.filter(o => o.length === 1).length === compiled.length) { // If all parts have exactly 1 character
            return "[" + compiled.join() + "]";
        }

        return "(" + compiled.map(o => o.indexOf("|") !== -1 ? "(" + o + ")" : o).join("|") + ")";
    }

    protected createInstance(): RegexToken {
        return new AlternativesToken();
    }
}
