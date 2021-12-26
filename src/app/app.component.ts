import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent { // TODO: add save/loading regex from local/session storage
    title = 'GraphicalRegexDesigner';
}
