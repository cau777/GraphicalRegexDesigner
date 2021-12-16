import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {MouseService} from "../mouse.service";

@Component({
    selector: 'app-dragging-element',
    templateUrl: './dragging-element.component.html',
    styleUrls: ['./dragging-element.component.less']
})
export class DraggingElementComponent implements OnInit, OnDestroy {
    public constructor(private el: ElementRef, public mouse: MouseService) {
    }

    public ngOnInit(): void {
        document.body.appendChild(this.el.nativeElement);
    }

    public ngOnDestroy(): void {
        this.el.nativeElement.remove();
    }
}
