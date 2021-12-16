import {Component, Input} from '@angular/core';
import {RegexToken} from "../models/RegexToken";

@Component({
  selector: 'app-token-graphics',
  templateUrl: './token-graphics.component.html',
  styleUrls: ['./token-graphics.component.less']
})
export class TokenGraphicsComponent {
    @Input()
    public token!: RegexToken;
}
