import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {RegexToken} from "../models/RegexToken";

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

    public constructor(private element: ElementRef) {
    }

    public ngOnInit(): void {
        let child = this.element.nativeElement.children[0] as HTMLSpanElement;
        child.innerText = this.token.values[this.index];
    }

    public onInput(e: Event) {
        this.token.values[this.index] = (e.target as HTMLSpanElement).innerText;
        console.log(this.token.values[this.index])
    }
}
