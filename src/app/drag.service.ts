import {Injectable} from '@angular/core';
import {RegexToken} from "./models/RegexToken";

@Injectable({
    providedIn: 'root'
})
export class DragService {
    public currentlyDragging?: RegexToken;
    private stoppedDraggingCallback?: () => void;

    public startDragging(token: RegexToken, stoppedDraggingCallback?: () => void) {
        console.log("start dragging");
        this.stoppedDraggingCallback = stoppedDraggingCallback;
        this.currentlyDragging = token;
    }

    public stopDragging() {
        console.log("stop dragging");
        this.stoppedDraggingCallback?.();
        this.stoppedDraggingCallback = undefined;
        this.currentlyDragging = undefined;
    }
}
