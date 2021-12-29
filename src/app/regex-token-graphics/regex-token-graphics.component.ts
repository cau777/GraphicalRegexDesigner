import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {RegexToken} from "../models/RegexToken";

@Component({
    selector: 'app-regex-token-graphics',
    templateUrl: './regex-token-graphics.component.html',
    styleUrls: ['./regex-token-graphics.component.less']
})
export class RegexTokenGraphicsComponent implements OnChanges {
    @Input()
    public token!: RegexToken;

    @Output()
    public mouseUpInner = new EventEmitter<Event>();

    public tooltip = "";

    public onMouseUpInner(e: Event) {
        this.mouseUpInner.emit(e);
    }

    public getInnerStyle() {
        if (this.token.acceptsChildren) {
            return {"background-color": this.token.centerColor};
        }
        return {};
    }

    public ngOnChanges() {
        this.tooltip = this.token.tooltip() ?? "";
    }
}
