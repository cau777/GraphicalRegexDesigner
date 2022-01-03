import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {DragService} from "../../drag.service";
import {RegexBuilderService} from "../../regex-builder.service";
import {RegexToken} from "../../models/RegexToken";
import {VariableReferenceToken} from "../../models/tokens/VariableReferenceToken";
import {MainToken} from "../../models/tokens/MainToken";
import {IReadOnlyMap} from "../../models/interfaces/IReadOnlyMap";
import {CommonTokens} from "../../misc/tokens-constants";

@Component({
    selector: 'app-available-tokens',
    templateUrl: './available-tokens.component.html',
    styleUrls: ['./available-tokens.component.less']
})
export class AvailableTokensComponent implements OnChanges {
    @Input()
    public variables!: IReadOnlyMap<string, MainToken>;

    public tokens: RegexToken[];
    private readonly defaultTokens: RegexToken[];
    private query = "";

    public constructor(public dragService: DragService, private regexBuilder: RegexBuilderService) {
        this.defaultTokens = CommonTokens.map(TokenType => new TokenType(this.regexBuilder));
        this.tokens = this.getTokens();
    }

    public getTokens() {
        let tokens = [...this.defaultTokens];

        for (const variable of this.regexBuilder.variables.values()) {
            if (variable.name !== "Regex")
                tokens.push(new VariableReferenceToken(variable.name, this.regexBuilder));
        }

        if (this.query) {
            const lowerQuery = this.query.toLowerCase();
            tokens = tokens.filter(o => o.name.toLowerCase().indexOf(lowerQuery) !== -1);
        }

        return tokens;
    }

    public onInputQuery(e: Event) {
        const element = e.target as HTMLInputElement;
        this.query = element.value;
        this.tokens = this.getTokens();
    }

    public ngOnChanges(changes: SimpleChanges) {
        this.tokens = this.getTokens();
    }
}
