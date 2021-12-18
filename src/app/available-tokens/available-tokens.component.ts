import {Component} from '@angular/core';
import {DragService} from "../drag.service";
import {AnyCharacterToken} from "../models/tokens/AnyCharacterToken";
import {LiteralToken} from "../models/tokens/LiteralToken";
import {OptionalToken} from "../models/tokens/OptionalToken";
import {Plus0Times} from "../models/tokens/Plus0Times";
import {Plus1Times} from "../models/tokens/Plus1Times";

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
        new AnyCharacterToken(),
        new LiteralToken(),
        new OptionalToken(),
        new Plus0Times(),
        new Plus1Times(),
        // new RegexToken("More than {} times", "#ea8545", true),
        // new RegexToken("Less than {} times", "#24c6cc", true),
        // new RegexToken("Between {} and {} times", "#85ed68", true),
        // new RegexToken("Alternatives", "#006FED", true),
        // new RegexToken("All chars but", "#006FED", true),
        // new RegexToken("Group", "#006FED", true),
        // New line
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
        let element = e.target as HTMLInputElement;
        this.query = element.value;
        console.log(element.scrollWidth);
    }
}
