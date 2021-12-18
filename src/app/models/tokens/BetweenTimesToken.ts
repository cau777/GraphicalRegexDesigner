import {PrevCharModifierToken} from "./PrevCharModifierToken";
import {RegexToken} from "../RegexToken";

export class BetweenTimesToken extends PrevCharModifierToken {
    public constructor() {
        super("Between {} and {} times", "#85ed68", true);
    }

    protected get token(): string {
        let min = parseInt(this.values[0]);
        let max = parseInt(this.values[1]);

        if (isNaN(min)) throw this.invalidMin();
        if (isNaN(max)) throw this.invalidMax();

        return "{" + min + "," + max + "}";
    }

    protected createInstance(): RegexToken {
        return new BetweenTimesToken();
    }
}
