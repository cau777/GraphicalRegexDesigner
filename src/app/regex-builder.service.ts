import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RegexBuilderService {
    private _assertStart = false;
    private _assertEnd = false;
    public regex = "";

    public constructor() {
    }

    private generateRegex() {
        let regex = "";

        if (this._assertStart) regex += "^";

        // Logic

        if (this._assertEnd) regex += "$";

        this.regex = regex;
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
