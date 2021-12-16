import {Component} from '@angular/core';
import {DragService} from "../drag.service";

@Component({
    selector: 'app-regex-token-disposal',
    templateUrl: './regex-token-disposal.component.html',
    styleUrls: ['./regex-token-disposal.component.less']
})
export class RegexTokenDisposalComponent {
    public constructor(private dragService: DragService) {
    }

    public onMouseUp(e: Event) {
        e.stopPropagation();
        e.preventDefault();

        this.dragService.currentlyDragging = undefined;
        this.dragService.stopDragging();
    }
}
