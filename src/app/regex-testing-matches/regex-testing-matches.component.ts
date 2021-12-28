import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {IMatchInfo} from "../regex-testing/regex-testing.component";

@Component({
    selector: 'app-regex-testing-matches',
    templateUrl: './regex-testing-matches.component.html',
    styleUrls: ['./regex-testing-matches.component.less']
})
export class RegexTestingMatchesComponent implements OnChanges{
    @Input()
    public text = "";

    @Input()
    public regex = "";

    public matches: IMatchInfo[] = [];

    public constructor() {
    }

    public ngOnChanges(changes: SimpleChanges) {
        this.matches = this.findMatches(this.text)
    }

    public findMatches(text: string) {
        if (this.regex.length === 0)
            return [];

        let re = new RegExp(this.regex, "g");
        let result: IMatchInfo[] = [];
        let matches = text.matchAll(re);

        for (let match of matches) {
            let index = match.index ?? 0;

            result.push({
                start: index,
                end: index + match.length,
                groups: match.map(o => o)
            });
        }

        return result;
    }
}
