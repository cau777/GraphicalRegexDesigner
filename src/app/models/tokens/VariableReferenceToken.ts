import {RegexToken} from "../RegexToken";
import {ITokenBuilder} from "../ITokenBuilder";

export class VariableReferenceToken extends RegexToken {
    public constructor(name: string, builder: ITokenBuilder) {
        super(name, "#8a8200", false, builder);
    }

    public compile(): string {
        return this.builder.compiler.getCompiledVariable(this.name);
    }

    protected createInstance(): RegexToken {
        return new VariableReferenceToken(this.name, this.builder);
    }

    public tooltip() {
        return "Reference to the variable '" + this.name + "'";
    }
}
