import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-simple-error',
  templateUrl: './simple-error.component.html',
  styleUrls: ['./simple-error.component.less']
})
export class SimpleErrorComponent  {
    @Input()
    public error?: string;
}
