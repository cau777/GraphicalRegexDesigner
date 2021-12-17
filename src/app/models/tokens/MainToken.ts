import {RegexToken} from "../RegexToken";

export class MainToken extends RegexToken {
    public constructor(name: string) {
        super(name, "#8a8200", true);
    }

    public compile(): string {
        return this.compileAndConcatChildren();
    }

    protected createInstance(): RegexToken {
        return new MainToken(this.name);
    }

}
