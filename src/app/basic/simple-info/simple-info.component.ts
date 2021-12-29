import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-simple-info',
    templateUrl: './simple-info.component.html',
    styleUrls: ['./simple-info.component.less']
})
export class SimpleInfoComponent {
    @Input()
    public info?: string;
}
