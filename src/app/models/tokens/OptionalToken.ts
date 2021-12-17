import {PrevCharModifierToken} from "./PrevCharModifierToken";

export class OptionalToken extends PrevCharModifierToken {
    protected token = "?";

    public constructor() {
        super("Optional", "#d24b3c", true);
    }

    protected createInstance() {
        return new OptionalToken();
    }
}
