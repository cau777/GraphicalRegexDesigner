import {RegexToken} from "../RegexToken";

export abstract class PrevCharModifierToken extends RegexToken {
    protected abstract get token(): string;

    public compile(): string {
        if (this.children.length === 0)
            throw this.mustHaveChildren();

        const content = this.compileAndConcatChildren();

        if (content.length === 1) return content + this.token;
        if (content.startsWith("(") && content.endsWith(")")) return content; // If already in parentheses
        return "(" + content + ")" + this.token;
    }
}
