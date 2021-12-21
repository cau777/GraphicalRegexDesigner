import {Injectable} from '@angular/core';
import {RegexToken} from "./models/RegexToken";
import {MainToken} from "./models/tokens/MainToken";
import {LiteralToken} from "./models/tokens/LiteralToken";
import {Upper, Lower, AllChars, Digits} from "./misc/string-constants";

@Injectable({
    providedIn: 'root'
})
export class RegexBuilderService {
    private _assertStart = false;
    private _assertEnd = false;
    public mainRegexToken: RegexToken;
    public variables: Map<string, MainToken>;
    public regex = "";
    public error?: string;

    public constructor() {
        this.mainRegexToken = new MainToken("Regex", false);
        this.variables = new Map<string, MainToken>();

        this.createLiteralsVariable("Upper letters", Upper);
        this.createLiteralsVariable("Lower letters", Lower);
        this.createLiteralsVariable("Letters", AllChars);
        this.createLiteralsVariable("Digits", Digits);
    }

    public generateRegex() {
        try {
            let regex = "";

            if (this._assertStart) regex += "^";

            regex += this.mainRegexToken.compile(this);

            if (this._assertEnd) regex += "$";

            this.regex = regex;
            this.error = undefined;
        } catch (e) {
            this.error = e as string;
            console.log(this.error)
        }
    }

    public set assertStart(value: boolean) {
        this._assertStart = value;
        this.generateRegex();
    }

    public set assertEnd(value: boolean) {
        this._assertEnd = value;
        this.generateRegex();
    }

    private createLiteralsVariable(name: string, literals: string) {
        let children = [];

        for (let literal of literals) {
            let token = new LiteralToken();
            token.values[0] = literal;
            children.push(token)
        }

        this.variables.set(name, new MainToken(name, true, children));
    }
}
