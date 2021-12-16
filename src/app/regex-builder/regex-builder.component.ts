import {Component} from '@angular/core';
import {RegexToken} from "../models/RegexToken";
import {DragService} from "../drag.service";

@Component({
    selector: 'app-regex-builder',
    templateUrl: './regex-builder.component.html',
    styleUrls: ['./regex-builder.component.less']
})
export class RegexBuilderComponent {
    public constructor(public dragService: DragService) {
    }

    public mainToken = new RegexToken("Regex", "#c4ba00", "#8a8200", true, [
        new RegexToken("Child", "#c4ba00", "#8a8200", true, [
            new RegexToken("Child", "#c4ba00", "#8a8200", false)
        ]),
        new RegexToken("Child", "#c4ba00", "#8a8200", false)
    ]);
}
