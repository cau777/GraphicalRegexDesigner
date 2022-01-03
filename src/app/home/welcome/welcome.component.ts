import {Component} from '@angular/core';
import {LocalStorageService} from "../../local-storage.service";

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent {
    public constructor(public storageService: LocalStorageService) {
    }
}
