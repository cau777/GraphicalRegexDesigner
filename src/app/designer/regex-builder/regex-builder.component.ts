import {Component} from '@angular/core';
import {DragService} from "../../drag.service";
import {RegexBuilderService} from "../../regex-builder.service";

@Component({
    selector: 'app-regex-builder',
    templateUrl: './regex-builder.component.html',
    styleUrls: ['./regex-builder.component.less']
})
export class RegexBuilderComponent {
    public constructor(public dragService: DragService, public regexBuilder: RegexBuilderService) {
    }
}
