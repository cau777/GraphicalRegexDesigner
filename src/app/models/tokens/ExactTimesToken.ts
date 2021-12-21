import {RegexToken} from "../RegexToken";
import {PrevCharModifierToken} from "./PrevCharModifierToken";

export class ExactTimesToken extends PrevCharModifierToken {
    public constructor() {
        super("Exactly {} times", "#f694a3", true);
    }

    protected get token(): string {
        let value = parseInt(this.values[0]);

        if (isNaN(value)) throw this.invalidVal();

        return "{" + value + "}";
    }

    protected createInstance(): RegexToken {
        return new ExactTimesToken();
    }
}
