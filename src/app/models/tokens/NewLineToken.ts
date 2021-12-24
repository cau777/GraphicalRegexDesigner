import {RegexToken} from "../RegexToken";

export class NewLineToken extends RegexToken {
    public constructor() {
        super("New line", "#ee6002", false);
    }

    public compile(): string {
        return "\n";
    }

    public override createInstance(): RegexToken {
        return new NewLineToken();
    }
}
