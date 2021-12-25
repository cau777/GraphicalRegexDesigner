import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {RegexToken} from "../models/RegexToken";
import {IHeaderPart} from "../models/IHeaderPart";

@Component({
    selector: 'app-regex-token-header',
    templateUrl: './regex-token-header.component.html',
    styleUrls: ['./regex-token-header.component.less']
})
export class RegexTokenHeaderComponent implements OnInit{
    @Input()
    public token!: RegexToken;

    @Input()
    public part!: IHeaderPart;

    @HostBinding("class.flex-break")
    private flexBreak = false;

    public ngOnInit() {
        this.flexBreak = this.part.type === "newline";
    }
}
