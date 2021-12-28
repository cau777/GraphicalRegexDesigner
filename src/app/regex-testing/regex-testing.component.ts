import {Component} from '@angular/core';
import {RegexBuilderService} from "../regex-builder.service";

export interface IMatchInfo {
    start: number;
    end: number;
    groups: string[];
}

@Component({
    selector: 'app-regex-testing',
    templateUrl: './regex-testing.component.html',
    styleUrls: ['./regex-testing.component.less']
})
export class RegexTestingComponent {
    public textRows = 2;
    public text = "";

    public constructor(public regexBuilder: RegexBuilderService) {
    }

    public onTextInput(e: Event) {
        let textarea = e.target as HTMLTextAreaElement;
        this.text = textarea.value;
        this.textRows = Math.max(2, 2 + (this.text.match(/\n/g) || []).length);
    }
}
