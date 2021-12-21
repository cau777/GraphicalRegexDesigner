import {RegexToken} from "../RegexToken";
import {RegexBuilderService} from "../../regex-builder.service";

export class VariableReferenceToken extends RegexToken {
    public constructor(name: string) {
        super(name, "#8a8200", false);
    }

    public compile(builder: RegexBuilderService): string {
        return this.getToken(builder).compile(builder);
    }

    public getToken(builder: RegexBuilderService) {
        let found = builder.variables.get(this.name);
        if (!found) throw "Invalid variable reference: " + this.name;
        return found;
    }

    protected createInstance(): RegexToken {
        return new VariableReferenceToken(this.name);
    }
}
