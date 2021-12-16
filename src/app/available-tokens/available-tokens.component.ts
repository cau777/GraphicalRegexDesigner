import {Component, Input} from '@angular/core';
import {RegexToken} from "../models/RegexToken";
import {DragService} from "../drag.service";

@Component({
  selector: 'app-available-tokens',
  templateUrl: './available-tokens.component.html',
  styleUrls: ['./available-tokens.component.less']
})
export class AvailableTokensComponent {
    @Input()
    public query?: string;

    public constructor(public dragService: DragService) {
    }

    private static readonly AllTokens = [
        new RegexToken("Main", "#006FED", "#005ac0", true),
        new RegexToken("Literal", "#006FED", "#005ac0", false),
    ]

    public getTokens() {
        let tokens = AvailableTokensComponent.AllTokens;

        if (this.query) {
            let lowerQuery = this.query.toLowerCase();
            tokens = tokens.filter(o => o.name.toLowerCase().indexOf(lowerQuery) !== -1);
        }

        return tokens;
    }
}
