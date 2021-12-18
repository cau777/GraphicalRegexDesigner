import {RegexToken} from "../RegexToken";
import {PrevCharModifierToken} from "./PrevCharModifierToken";

export class MoreThanToken extends PrevCharModifierToken {
    public constructor() {
        super("More than {} times", "#ea8545", true);
    }

    protected get token() {
        let min = parseInt(this.values[0]);
        if (isNaN(min)) throw "Invalid minimum value at " + this.name;
        return "{" + min + ",}";
    }

    protected createInstance(): RegexToken {
        return new MoreThanToken();
    }
}
