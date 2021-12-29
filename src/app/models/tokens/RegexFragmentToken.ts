import {RegexToken} from "../RegexToken";
import {ITokenBuilder} from "../ITokenBuilder";

export class RegexFragmentToken extends RegexToken {
    public constructor(builder: ITokenBuilder) {
        super("Regex fragment \n{}", "#c0c0c0", false, builder);
    }

    public compile(): string {
        if (!this.values[0]) throw this.cantBeEmpty();
        return this.values[0];
    }

    protected createInstance(): RegexToken {
        return new RegexFragmentToken(this.builder);
    }

    public tooltip() {
        if(this.values[0])
            return "Matches the regular expression " + this.values[0];

        return "Matches a regular expression fragment";
    }
}
