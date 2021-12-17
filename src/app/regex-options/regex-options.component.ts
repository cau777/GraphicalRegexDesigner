import {Component} from '@angular/core';
import {RegexBuilderService} from "../regex-builder.service";

@Component({
    selector: 'app-regex-options',
    templateUrl: './regex-options.component.html',
    styleUrls: ['./regex-options.component.less']
})
export class RegexOptionsComponent {
    // TODO: add \\ escaping
    public constructor(public readonly regexBuilderService: RegexBuilderService) {
    }
}
