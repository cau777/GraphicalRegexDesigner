import {RegexToken} from "../RegexToken";
import {PrevCharModifierToken} from "./PrevCharModifierToken";
import {ITokenBuilder} from "../ITokenBuilder";

export class LessThanToken extends PrevCharModifierToken {
    public constructor(builder: ITokenBuilder) {
        super("Less than {} times", "#24c6cc", true, builder);
    }

    protected get token() {
        const max = parseInt(this.values[0]);
        if (isNaN(max)) throw this.invalidMax();
        return "{," + max + "}";
    }

    protected createInstance(): RegexToken {
        return new LessThanToken(this.builder);
    }

    public tooltip() {
        const max = parseInt(this.values[0]);
        if (isNaN(max))
            return "Matches if its content appears less than V times (inclusive)";

        return "Matches if its content appears less than " + max + " times (inclusive)";
    }
}
