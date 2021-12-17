import {Component} from '@angular/core';
import {RegexToken} from "../models/RegexToken";
import {DragService} from "../drag.service";

@Component({
  selector: 'app-available-tokens',
  templateUrl: './available-tokens.component.html',
  styleUrls: ['./available-tokens.component.less']
})
export class AvailableTokensComponent {
    private query= "";

    public constructor(public dragService: DragService) {
    }

    private static readonly AllTokens = [
        new RegexToken("Any char", "#4f84ec", false),
        new RegexToken("Literal", "#56a75c", false),

        new RegexToken("Optional", "#d24b3c", true),
        new RegexToken("0+ times", "#a383da", true),
        new RegexToken("1+ times", "#e363b4", true),
        new RegexToken("More than {} times", "#ea8545", true),
        new RegexToken("Less than {} times", "#24c6cc", true),
        new RegexToken("Between {} and {} times", "#85ed68", true),
        new RegexToken("Alternatives", "#006FED", true),
        new RegexToken("All chars but", "#006FED", true),
        new RegexToken("Group", "#006FED", true),
    ]

    public getTokens() {
        let tokens = AvailableTokensComponent.AllTokens;

        if (this.query) {
            let lowerQuery = this.query.toLowerCase();
            tokens = tokens.filter(o => o.name.toLowerCase().indexOf(lowerQuery) !== -1);
        }

        return tokens;
    }

    public onInputQuery(e: Event){
        this.query = (e.target as HTMLInputElement).value;
    }
}
