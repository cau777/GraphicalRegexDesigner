import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {LocalStorageService} from "../../local-storage.service";

@Component({
    selector: 'app-save-name-dialog',
    templateUrl: './save-name-dialog.component.html',
    styleUrls: ['./save-name-dialog.component.less']
})
export class SaveNameDialogComponent {
    public value = "";

    public constructor(private storageService: LocalStorageService) {
    }

    public onInput(e: Event) {
        this.value = (e.target as HTMLInputElement).value;
    }
}
