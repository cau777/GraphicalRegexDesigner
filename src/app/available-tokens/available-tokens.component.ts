import {Component, OnChanges} from '@angular/core';
import {DragService} from "../drag.service";
import {AnySymbolToken} from "../models/tokens/AnySymbolToken";
import {LiteralToken} from "../models/tokens/LiteralToken";
import {OptionalToken} from "../models/tokens/OptionalToken";
import {Plus0Times} from "../models/tokens/Plus0Times";
import {Plus1Times} from "../models/tokens/Plus1Times";
import {NewLineToken} from "../models/tokens/NewLineToken";
import {MoreThanToken} from "../models/tokens/MoreThanToken";
import {LessThanToken} from "../models/tokens/LessThanToken";
import {BetweenTimesToken} from "../models/tokens/BetweenTimesToken";
import {SymbolAlternativesToken} from "../models/tokens/SymbolAlternativesToken";
import {GroupToken} from "../models/tokens/GroupToken";
import {ExactTimesToken} from "../models/tokens/ExactTimesToken";
import {TabToken} from "../models/tokens/TabToken";
import {RegexBuilderService} from "../regex-builder.service";
import {RegexToken} from "../models/RegexToken";
import {VariableReferenceToken} from "../models/tokens/VariableReferenceToken";
import {TermsAlternativesToken} from "../models/tokens/TermsAlternativesToken";
import {NegativeSymbolAlternativesToken} from "../models/tokens/NegativeSymbolAlternativesToken";
import {RegexFragmentToken} from "../models/tokens/RegexFragmentToken";

@Component({
    selector: 'app-available-tokens',
    templateUrl: './available-tokens.component.html',
    styleUrls: ['./available-tokens.component.less']
})
export class AvailableTokensComponent implements OnChanges {
    public tokens: RegexToken[];
    private readonly defaultTokens: RegexToken[];
    private query = "";

    public constructor(public dragService: DragService, private regexBuilder: RegexBuilderService) {
        this.defaultTokens = [
            new AnySymbolToken(this.regexBuilder),
            new LiteralToken(this.regexBuilder),
            new OptionalToken(this.regexBuilder),
            new Plus0Times(this.regexBuilder),
            new Plus1Times(this.regexBuilder),
            new ExactTimesToken(this.regexBuilder),
            new MoreThanToken(this.regexBuilder),
            new LessThanToken(this.regexBuilder),
            new BetweenTimesToken(this.regexBuilder),
            new SymbolAlternativesToken(this.regexBuilder),
            new TermsAlternativesToken(this.regexBuilder),
            new NegativeSymbolAlternativesToken(this.regexBuilder),
            new RegexFragmentToken(this.regexBuilder),
            new GroupToken(this.regexBuilder),
            new NewLineToken(this.regexBuilder),
            new TabToken(this.regexBuilder),
        ];

        this.tokens = this.getTokens();
    }

    public getTokens() {
        let tokens = [...this.defaultTokens];

        for (let variable of this.regexBuilder.variables.values()) {
            if (variable.name !== "Regex")
                tokens.push(new VariableReferenceToken(variable.name, this.regexBuilder));
        }

        if (this.query) {
            let lowerQuery = this.query.toLowerCase();
            tokens = tokens.filter(o => o.name.toLowerCase().indexOf(lowerQuery) !== -1);
        }

        return tokens;
    }

    public onInputQuery(e: Event) {
        let element = e.target as HTMLInputElement;
        this.query = element.value;
    }

    public ngOnChanges() {
        this.tokens = this.getTokens();
    }
}
