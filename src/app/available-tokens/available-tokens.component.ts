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
import {CharAlternativesToken} from "../models/tokens/CharAlternativesToken";
import {GroupToken} from "../models/tokens/GroupToken";
import {ExactTimesToken} from "../models/tokens/ExactTimesToken";
import {TabToken} from "../models/tokens/TabToken";
import {RegexBuilderService} from "../regex-builder.service";
import {RegexToken} from "../models/RegexToken";
import {VariableReferenceToken} from "../models/tokens/VariableReferenceToken";
import {TermsAlternativesToken} from "../models/tokens/TermsAlternativesToken";
import {NegativeCharAlternativesToken} from "../models/tokens/NegativeCharAlternativesToken";
import {RegexFragmentToken} from "../models/tokens/RegexFragmentToken";

@Component({
  selector: 'app-available-tokens',
  templateUrl: './available-tokens.component.html',
  styleUrls: ['./available-tokens.component.less']
})
export class AvailableTokensComponent {
    private readonly allTokens: RegexToken[];
    private query= "";

    public constructor(public dragService: DragService, private regexBuilder: RegexBuilderService) {
        this.allTokens = [
            new AnyCharacterToken(),
            new LiteralToken(),
            new OptionalToken(),
            new Plus0Times(),
            new Plus1Times(),
            new ExactTimesToken(),
            new MoreThanToken(),
            new LessThanToken(),
            new BetweenTimesToken(),
            new CharAlternativesToken(),
            new TermsAlternativesToken(),
            new NegativeCharAlternativesToken(),
            new RegexFragmentToken(),
            new GroupToken(),
            new NewLineToken(),
            new TabToken(),
        ];

        for (let variable of regexBuilder.variables.values()) {
            this.allTokens.push(new VariableReferenceToken(variable.name));
        }
    }

    public getTokens() {
        let tokens = this.allTokens;

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
