import {RegexToken} from "../RegexToken";

export abstract class PrevCharModifierToken extends RegexToken {
    protected abstract token: string;

    public compile(): string {
        if (this.children.length === 0)
            throw this.name + " must have children";

        let content = this.compileAndConcatChildren();

        if (content.length === 1) return content + this.token;
        return "(" + content + ")" + this.token;
    }
}
