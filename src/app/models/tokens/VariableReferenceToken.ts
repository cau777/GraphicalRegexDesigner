import {RegexToken} from "../RegexToken";
import {RegexCompiler} from "../../regex-compiler";

export class VariableReferenceToken extends RegexToken {
    public constructor(name: string) {
        super(name, "#8a8200", false);
    }

    public compile(builder: RegexCompiler): string {
        return builder.getCompiledVariable(this.name);
    }

    protected createInstance(): RegexToken {
        return new VariableReferenceToken(this.name);
    }
}
