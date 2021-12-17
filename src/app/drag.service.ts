import {Injectable} from '@angular/core';
import {RegexToken} from "./models/RegexToken";

@Injectable({
    providedIn: 'root'
})
export class DragService {
    public currentlyDragging?: RegexToken;
    private stoppedDraggingCallback?: () => void;

    public startDragging(token: RegexToken, invalidCallback?: () => void) {
        this.stoppedDraggingCallback = invalidCallback;
        this.currentlyDragging = token;
    }

    public stopDragging(wasInvalid: boolean = false) {
        if (wasInvalid)
            this.stoppedDraggingCallback?.();
        this.stoppedDraggingCallback = undefined;
        this.currentlyDragging = undefined;
    }
}
