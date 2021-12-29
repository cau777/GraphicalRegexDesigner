import {PrevCharModifierToken} from "./PrevCharModifierToken";
import {ITokenBuilder} from "../ITokenBuilder";

export class OptionalToken extends PrevCharModifierToken {
    protected token = "?";

    public constructor(builder: ITokenBuilder) {
        super("Optional", "#d24b3c", true, builder);
    }

    protected createInstance() {
        return new OptionalToken(this.builder);
    }

    public tooltip() {
        return "Matches if its contents appear once or not";
    }
}
