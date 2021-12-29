import {RegexToken} from "../RegexToken";
import {PrevCharModifierToken} from "./PrevCharModifierToken";
import {ITokenBuilder} from "../ITokenBuilder";

export class MoreThanToken extends PrevCharModifierToken {
    public constructor(builder: ITokenBuilder) {
        super("More than {} times", "#ea8545", true, builder);
    }

    protected get token() {
        const min = parseInt(this.values[0]);
        if (isNaN(min)) throw this.invalidMin();
        return "{" + min + ",}";
    }

    protected createInstance(): RegexToken {
        return new MoreThanToken(this.builder);
    }

    public tooltip() {
        const min = parseInt(this.values[0]);
        if (isNaN(min))
            return "Matches if its content appears more than V times (inclusive)";

        return "Matches if its content appears more than " + min + " times (inclusive)";
    }
}
