import {PrevCharModifierToken} from "./PrevCharModifierToken";

export class Plus0Times extends PrevCharModifierToken {
    protected token = "*";

    public constructor() {
        super("0+ times", "#a383da", true);
    }

    protected createInstance() {
        return new Plus0Times();
    }
}
