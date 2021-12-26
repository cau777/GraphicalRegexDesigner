import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {RegexToken} from "../models/RegexToken";
import {RegexBuilderService} from "../regex-builder.service";

@Component({
    selector: 'app-token-header-input',
    templateUrl: './token-header-input.component.html',
    styleUrls: ['./token-header-input.component.less']
})
export class TokenHeaderInputComponent implements OnInit {
    @Input()
    public token!: RegexToken;

    @Input()
    public index!: number;

    public spacesString = "";

    public constructor(private element: ElementRef, private regexBuilder: RegexBuilderService) {
    }

    public ngOnInit(): void {
        let child = this.element.nativeElement.querySelector(".input") as HTMLSpanElement;
        child.innerText = this.token.values[this.index];
        this.updateSpacesString(this.token.values[this.index]);
    }

    public onInput(e: Event) {
        let text = (e.target as HTMLSpanElement).innerText;
        this.token.values[this.index] = text;
        this.updateSpacesString(text);
        this.regexBuilder.generateRegex();
    }

    private updateSpacesString(text: string) {
        let result = "";
        for (let char of text) {
            if (char === " ") result += "-";
            else result += " ";
        }
        this.spacesString = result;
    }
}
