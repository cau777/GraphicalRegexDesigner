import {RegexToken} from "../RegexToken";
import {PrevCharModifierToken} from "./PrevCharModifierToken";

export class LessThanToken extends PrevCharModifierToken {
    public constructor() {
        super("Less than {} times", "#24c6cc", true);
    }

    protected get token() {
        let max = parseInt(this.values[0]);
        if (isNaN(max)) throw this.invalidMax();
        return "{," + max + "}";
    }

    protected createInstance(): RegexToken {
        return new LessThanToken();
    }
}
