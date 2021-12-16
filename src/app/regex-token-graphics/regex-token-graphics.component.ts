import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RegexToken} from "../models/RegexToken";

@Component({
    selector: 'app-regex-token-graphics',
    templateUrl: './regex-token-graphics.component.html',
    styleUrls: ['./regex-token-graphics.component.less']
})
export class RegexTokenGraphicsComponent {
    @Input()
    public token!: RegexToken;

    @Output()
    public mouseUpInner = new EventEmitter<Event>();

    public onMouseUpInner(e: Event) {
        this.mouseUpInner.emit(e);
    }
}
