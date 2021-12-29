import {PrevCharModifierToken} from "./PrevCharModifierToken";
import {ITokenBuilder} from "../ITokenBuilder";

export class Plus0Times extends PrevCharModifierToken {
    protected token = "*";

    public constructor(builder: ITokenBuilder) {
        super("0+ times", "#a383da", true, builder);
    }

    protected createInstance() {
        return new Plus0Times(this.builder);
    }

    public tooltip() {
        return "Matches if its content appears 0 or more times";
    }
}
