import {RegexToken} from "../RegexToken";

export class AnyCharacterToken extends RegexToken {
    public constructor() {
        super("Any char", "#4f84ec", false);
    }

    public compile(): string {
        return ".";
    }

    protected createInstance(): RegexToken {
        return new AnyCharacterToken();
    }
}
