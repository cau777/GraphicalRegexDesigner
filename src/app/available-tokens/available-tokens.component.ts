import {Component} from '@angular/core';
import {DragService} from "../drag.service";
import {AnyCharacterToken} from "../models/tokens/AnyCharacterToken";
import {LiteralToken} from "../models/tokens/LiteralToken";
import {OptionalToken} from "../models/tokens/OptionalToken";
import {Plus0Times} from "../models/tokens/Plus0Times";
import {Plus1Times} from "../models/tokens/Plus1Times";
import {NewLineToken} from "../models/tokens/NewLineToken";
import {MoreThanToken} from "../models/tokens/MoreThanToken";
import {LessThanToken} from "../models/tokens/LessThanToken";
import {BetweenTimesToken} from "../models/tokens/BetweenTimesToken";
import {AlternativesToken} from "../models/tokens/AlternativesToken";
import {GroupToken} from "../models/tokens/GroupToken";

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
        // Exactly {} times
        new MoreThanToken(),
        new LessThanToken(),
        new BetweenTimesToken(),
        new AlternativesToken(),
        // new RegexToken("All chars but", "#f285bc", true),
        new GroupToken(),
        new NewLineToken(),
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
