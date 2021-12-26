import {RegexToken} from "../RegexToken";
import {RegexCompiler} from "../../regex-compiler";

export class RegexFragmentToken extends RegexToken {
    public constructor() {
        super("Regex fragment \n{}", "#c0c0c0", false);
    }

    public compile(builder: RegexCompiler): string {
        if (!this.values[0]) throw this.cantBeEmpty();
        return this.values[0];
    }

    protected createInstance(): RegexToken {
        return new RegexFragmentToken();
    }
}
