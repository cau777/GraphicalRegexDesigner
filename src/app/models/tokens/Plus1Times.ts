import {PrevCharModifierToken} from "./PrevCharModifierToken";
import {ITokenBuilder} from "../ITokenBuilder";

export class Plus1Times extends PrevCharModifierToken {
    protected token = "+";

    public constructor(builder: ITokenBuilder) {
        super("1+ times","#e363b4", true, builder);
    }

    protected createInstance() {
        return new Plus1Times(this.builder);
    }

    public tooltip() {
        return "Matches if its content appears 1 or more times";
    }
}
