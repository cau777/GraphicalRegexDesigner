import {Component, Input} from '@angular/core';
import {RegexToken} from "../models/RegexToken";
import {IHeaderPart} from "../models/IHeaderPart";

@Component({
    selector: 'app-regex-token-header',
    templateUrl: './regex-token-header.component.html',
    styleUrls: ['./regex-token-header.component.less']
})
export class RegexTokenHeaderComponent {
    @Input()
    public token!: RegexToken;

    @Input()
    public part!: IHeaderPart;
}
