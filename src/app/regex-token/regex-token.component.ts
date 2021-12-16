import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RegexToken} from "../models/RegexToken";
import {DragService} from "../drag.service";

@Component({
    selector: 'app-regex-token',
    templateUrl: './regex-token.component.html',
    styleUrls: ['./regex-token.component.less']
})
export class RegexTokenComponent {
    @Input()
    public token!: RegexToken;

    @Output()
    public startDragging = new EventEmitter<Event>();

    public constructor(private dragService: DragService) {
    }

    public onMouseDown(e: Event) {
        e.stopPropagation();
        this.startDragging.emit(e);

        console.log("click")
    }

    public onStartDraggingChild(e: Event, i: number) {
        e.preventDefault();
        this.dragService.currentlyDragging = this.token.children[i];
    }
}
