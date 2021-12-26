import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IInputDialogData} from "./IInputDialogData";

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.less']
})
export class InputDialogComponent {
    public value?: string;

    public constructor(private dialog: MatDialogRef<InputDialogComponent, string | undefined>,
                       @Inject(MAT_DIALOG_DATA) public data: IInputDialogData) {
    }

    public onClose() {
        this.dialog.close()
    }

    public onInput(e: Event) {
        this.value = (e.target as HTMLInputElement).value;
    }
}
