import {Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {RegexToken} from "../../models/RegexToken";
import {DragService} from "../../drag.service";
import {RegexBuilderService} from "../../regex-builder.service";
import {MouseEvent} from "ngx-bootstrap/utils/facade/browser";

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

    public constructor(private dragService: DragService,
                       private regexBuilder: RegexBuilderService,
                       private element: ElementRef) {
    }

    public onMouseDown(e: Event) {
        e.stopPropagation();
        this.startDragging.emit(e);
    }

    public onMouseUp(e: Event) {
        e.stopPropagation();
        e.preventDefault();
        const mouse = e as MouseEvent;

        if (this.dragService.currentlyDragging) {
            const pos = this.findInsertionPos(mouse.x, mouse.y);
            this.token.children.splice(pos, 0, this.dragService.currentlyDragging);
            this.dragService.stopDragging();
            this.regexBuilder.generateRegex();
        }
    }

    public onStartDraggingChild(e: Event, i: number) {
        e.preventDefault();
        this.dragService.startDragging(this.token.children[i], () => {
            if (this.dragService.currentlyDragging) {
                this.token.children.splice(i, 0, this.dragService.currentlyDragging);
                this.regexBuilder.generateRegex();
            }
        });
        this.token.children.splice(i, 1);
        this.regexBuilder.generateRegex();
    }

    private findInsertionPos(x: number, y: number) {
        const childrenElement = (this.element.nativeElement as HTMLElement).querySelector(".children") as HTMLDivElement;
        const children = childrenElement.children;

        if (children.length === 0) return 0;

        const start = childrenElement.getBoundingClientRect().x;
        let indexRowOffset: number = -1;

        const childrenWidths: number[] = [start];

        for (let i = 0; i < children.length; i++) {
            const rect = children[i].getBoundingClientRect();
            if (rect.top <= y && rect.bottom >= y) {
                if (indexRowOffset === -1) indexRowOffset = i;
                childrenWidths.push(rect.right);
            }
        }

        for (let i = 0; i < childrenWidths.length - 1; i++) {
            const middle = (childrenWidths[i] + childrenWidths[i + 1]) / 2;

            if (x < middle)
                return indexRowOffset + i;
        }

        return children.length;
    }
}
