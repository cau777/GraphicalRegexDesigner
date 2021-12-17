import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {RegexToken} from "./models/RegexToken";

@Directive({
    selector: '[appTokenHeaderFor]'
})
export class TokenHeaderForDirective {
    @Input("appTokenHeaderFor")
    public set render(token: RegexToken) {
        this.viewContainer.clear();
        let inputIndex = 0;

        for (let headerPart of token.header) {
            let isInput = headerPart === "input";
            this.viewContainer.createEmbeddedView(this.template, {isInput: isInput, inputIndex: inputIndex, text: headerPart});

            if (isInput) inputIndex++;
        }
    }

    public constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<any>) {
    }
}
