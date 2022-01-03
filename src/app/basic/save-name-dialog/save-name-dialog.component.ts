import {Component} from '@angular/core';
import {LocalStorageService} from "../../local-storage.service";
import {IExpressionSaveData} from "../../models/SaveData";

@Component({
    selector: 'app-save-name-dialog',
    templateUrl: './save-name-dialog.component.html',
    styleUrls: ['./save-name-dialog.component.less']
})
export class SaveNameDialogComponent {
    public value = "";
    public showing: IExpressionSaveData[];

    public constructor(private storageService: LocalStorageService) {
        this.showing = storageService.expressions;
    }

    public onInput(e: Event) {
        this.value = (e.target as HTMLInputElement).value;

        if (this.value) {
            this.showing = this.storageService.expressions.filter(o => o.name.includes(this.value));
        } else {
            this.showing = this.storageService.expressions;
        }
    }

    public onChangeSelected(data: IExpressionSaveData) {
        this.value = data.name;
    }
}
