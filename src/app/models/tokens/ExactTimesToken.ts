import {RegexToken} from "../RegexToken";
import {PrevCharModifierToken} from "./PrevCharModifierToken";
import {ITokenBuilder} from "../ITokenBuilder";

export class ExactTimesToken extends PrevCharModifierToken {
    public constructor(builder: ITokenBuilder) {
        super("Exactly {} times", "#f694a3", true, builder);
    }

    protected get token(): string {
        let value = parseInt(this.values[0]);

        if (isNaN(value)) throw this.invalidVal();

        return "{" + value + "}";
    }

    protected createInstance(): RegexToken {
        return new ExactTimesToken(this.builder);
    }

    public tooltip() {
        let value = parseInt(this.values[0]);
        if (isNaN(value))
            return "Matches if its content appears exactly V times";

        return "Matches if its content appears exactly " + value + " times";
    }
}
