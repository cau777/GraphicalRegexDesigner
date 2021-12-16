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
        new RegexToken("Any char", "#125E1B", "#005ac0", false),
        new RegexToken("Literal", "#006FED", "#005ac0", false),

        new RegexToken("Optional", "#006FED", "#005ac0", true),
        new RegexToken("0+ times", "#006FED", "#005ac0", true),
        new RegexToken("1+ times", "#006FED", "#005ac0", true),
        new RegexToken("More than {} times", "#006FED", "#005ac0", true),
        new RegexToken("Less than {} times", "#006FED", "#005ac0", true),
        new RegexToken("Between {} and {} times", "#006FED", "#005ac0", true),
        new RegexToken("Alternatives", "#006FED", "#005ac0", true),
        new RegexToken("Group", "#006FED", "#005ac0", true),
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
