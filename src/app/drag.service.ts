import {Injectable} from '@angular/core';
import {RegexToken} from "./models/RegexToken";

@Injectable({
    providedIn: 'root'
})
export class DragService {
    public currentlyDragging?: RegexToken;
    public draggingFromSource = false;

    public startDragging(token: RegexToken, source: boolean) {
        this.currentlyDragging = token;
        this.draggingFromSource = source;
    }
}
