import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {IMatchInfo} from "../regex-testing/regex-testing.component";

@Component({
    selector: 'app-regex-testing-matches',
    templateUrl: './regex-testing-matches.component.html',
    styleUrls: ['./regex-testing-matches.component.less']
})
export class RegexTestingMatchesComponent implements OnChanges {
    @Input()
    public text = "";

    @Input()
    public regex?: RegExp;

    public matches: IMatchInfo[] = [];

    public constructor() {
    }

    public ngOnChanges(changes: SimpleChanges) {
        this.matches = this.findMatches(this.text)
    }

    public findMatches(text: string) {
        let match;
        if (!this.regex)
            return [];

        const result: IMatchInfo[] = [];
        let matches: RegExpMatchArray[];

        if (this.regex.global) {
            matches = Array.from(text.matchAll(this.regex));
        } else {
            match = text.match(this.regex);
            matches = match ? [match] : [];
        }

        for (match of matches) {
            const index = match.index ?? 0;

            result.push({
                start: index,
                end: index + match[0].length,
                groups: match.map(o => o)
            });
        }

        return result;
    }
}
