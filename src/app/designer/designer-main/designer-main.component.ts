import {Component} from '@angular/core';
import {LocalStorageService} from "../../local-storage.service";

@Component({
    selector: 'app-designer-main',
    templateUrl: './designer-main.component.html',
    styleUrls: ['./designer-main.component.less']
})
export class DesignerMainComponent {
    public constructor(public storageService: LocalStorageService) {
    }
}
