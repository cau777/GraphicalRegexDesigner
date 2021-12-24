import {Component, Input} from '@angular/core';
import {RegexBuilderService} from "../regex-builder.service";
import {RegexToken} from "../models/RegexToken";

@Component({
  selector: 'app-regex-variable',
  templateUrl: './regex-variable.component.html',
  styleUrls: ['./regex-variable.component.less']
})
export class RegexVariableComponent {
    @Input()
    public token!: RegexToken;

    public constructor(public regexBuilder: RegexBuilderService) {
    }
}
