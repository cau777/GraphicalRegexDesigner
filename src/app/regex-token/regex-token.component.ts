import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RegexToken} from "../models/RegexToken";

@Component({
    selector: 'app-regex-token',
    templateUrl: './regex-token.component.html',
    styleUrls: ['./regex-token.component.less']
})
export class RegexTokenComponent {
    @Input()
    public token!: RegexToken;

    @Output()
    public startDragging = new EventEmitter();

    public onMouseDown(e: Event) {
        e.stopPropagation();
        this.startDragging.emit();

        console.log("click")
    }

    public onStartDraggingChild(id: number){

    }
}
