import {Injectable} from '@angular/core';
import {DragService} from "./drag.service";

@Injectable({
    providedIn: 'root',
})
export class MouseService {
    public mouseX = 0;
    public mouseY = 0;

    public constructor(private dragService: DragService) {
        document.addEventListener("mousemove", e => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
        document.addEventListener("mouseup", () => this.dragService.stopDragging(true));
    }
}
