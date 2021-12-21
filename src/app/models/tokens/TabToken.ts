import {RegexToken} from "../RegexToken";

export class TabToken extends RegexToken {
    public constructor() {
        super("Tab", "#57db5b", false);
    }

    public compile(): string {
        return "\\t";
    }

    protected createInstance(): RegexToken {
        return new TabToken();
    }
}
