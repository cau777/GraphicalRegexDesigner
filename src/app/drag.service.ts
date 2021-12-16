import {Injectable} from '@angular/core';
import {RegexToken} from "./models/RegexToken";

@Injectable({
    providedIn: 'root'
})
export class DragService {
    public currentlyDragging?: RegexToken;

    public startDragging(token: RegexToken) {
        console.log("start dragging");
        this.currentlyDragging = token;
    }

    public stopDragging() {
        console.log("stop dragging");
        this.currentlyDragging = undefined;
    }
}
