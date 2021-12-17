import {PrevCharModifierToken} from "./PrevCharModifierToken";

export class Plus1Times extends PrevCharModifierToken {
    protected token = "+";

    public constructor() {
        super("1+ times", "#e363b4", true);
    }

    protected createInstance() {
        return new Plus1Times();
    }

}
