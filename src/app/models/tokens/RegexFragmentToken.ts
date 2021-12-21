import {RegexToken} from "../RegexToken";
import {RegexBuilderService} from "../../regex-builder.service";

export class RegexFragmentToken extends RegexToken {
    public constructor() {
        super("Regex fragment \n{}", "#c0c0c0", false);
    }

    public compile(builder: RegexBuilderService): string {
        if (!this.values[0]) throw this.cantBeEmpty();
        return this.values[0];
    }

    protected createInstance(): RegexToken {
        return new RegexFragmentToken();
    }
}
