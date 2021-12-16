import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RegexToken} from "../models/RegexToken";

@Component({
    selector: 'app-token-graphics',
    templateUrl: './token-graphics.component.html',
    styleUrls: ['./token-graphics.component.less']
})
export class TokenGraphicsComponent {
    @Input()
    public token!: RegexToken;

    @Output()
    public mouseUpInner = new EventEmitter<Event>();

    public onMouseUpInner(e: Event) {
        this.mouseUpInner.emit(e);
    }
}
