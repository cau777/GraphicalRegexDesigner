import {RegexToken} from "../RegexToken";
import {RegexBuilderService} from "../../regex-builder.service";

export abstract class PrevCharModifierToken extends RegexToken {
    protected abstract get token(): string;

    public compile(builder: RegexBuilderService): string {
        if (this.children.length === 0)
            throw this.mustHaveChildren();

        let content = this.compileAndConcatChildren(builder);

        if (content.length === 1) return content + this.token;
        if (content.startsWith("(") && content.endsWith(")")) return content; // If already in parentheses
        return "(" + content + ")" + this.token;
    }
}
