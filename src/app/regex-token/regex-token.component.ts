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

        console.log("down")
    }

    public onMouseUp(e: Event) {
        e.stopPropagation();
        e.preventDefault();

        if (this.dragService.currentlyDragging) {
            this.token.children.push(this.dragService.currentlyDragging);
            this.dragService.stopDragging();
        }
    }

    public onStartDraggingChild(e: Event, i: number) {
        e.preventDefault();
        this.dragService.startDragging(this.token.children[i], () => {
            this.token.children.splice(i, 0, this.dragService.currentlyDragging!);
        });
        this.token.children.splice(i, 1);
    }
}
