import {PrevCharModifierToken} from "./PrevCharModifierToken";
import {RegexToken} from "../RegexToken";
import {ITokenBuilder} from "../ITokenBuilder";

export class BetweenTimesToken extends PrevCharModifierToken {
    public constructor(builder: ITokenBuilder) {
        super("Between {} and {} times", "#85ed68", true, builder);
    }

    protected get token(): string {
        const min = parseInt(this.values[0]);
        const max = parseInt(this.values[1]);

        if (isNaN(min)) throw this.invalidMin();
        if (isNaN(max)) throw this.invalidMax();

        return "{" + min + "," + max + "}";
    }

    protected createInstance(): RegexToken {
        return new BetweenTimesToken(this.builder);
    }

    public tooltip() {
        const min = parseInt(this.values[0]);
        const max = parseInt(this.values[1]);

        if (isNaN(min) || isNaN(max))
            return "Matches if its content appears at least V1 times (inclusive) and at most V2 times (inclusive)";

        return "Matches if its content appears at least " + min + " times (inclusive) and at most " + max + " times (inclusive)";
    }
}
