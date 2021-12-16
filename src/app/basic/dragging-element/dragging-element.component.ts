import {Component, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';
import {MouseService} from "../../mouse.service";

@Component({
    selector: 'app-dragging-element',
    templateUrl: './dragging-element.component.html',
    styleUrls: ['./dragging-element.component.less']
})
export class DraggingElementComponent implements OnInit, OnDestroy {
    @Input()
    public nestCount = 0;

    public constructor(private el: ElementRef, public mouse: MouseService) {
    }

    public ngOnInit(): void {
        let node: Element = document.body;

        for (let i = 0; i < this.nestCount; i++) {
            node = node.children[0];
        }

        node.appendChild(this.el.nativeElement);
    }

    public ngOnDestroy(): void {
        this.el.nativeElement.remove();
    }
}
