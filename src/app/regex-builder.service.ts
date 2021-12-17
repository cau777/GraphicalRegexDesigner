import {Injectable} from '@angular/core';
import {RegexToken} from "./models/RegexToken";
import {MainToken} from "./models/tokens/MainToken";

@Injectable({
    providedIn: 'root'
})
export class RegexBuilderService {
    private _assertStart = false;
    private _assertEnd = false;
    public mainRegexToken: RegexToken;
    public regex = "";
    public error?: string;

    public constructor() {
        this.mainRegexToken = new MainToken("Regex");
    }

    public generateRegex() {
        try {
            let regex = "";

            if (this._assertStart) regex += "^";

            regex += this.mainRegexToken.compile();

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
}
