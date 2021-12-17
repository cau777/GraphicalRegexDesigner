import {RegexToken} from "../RegexToken";

export class LiteralToken extends RegexToken {
    public constructor() {
        super("Literal \n {}", "#56a75c", false);
    }

    public compile(): string {
        if (!this.values[0]) throw "Literal can't be empty";
        return this.values[0].replace("\\", "\\\\");
    }

    protected createInstance(): RegexToken {
        return new LiteralToken();
    }
}
