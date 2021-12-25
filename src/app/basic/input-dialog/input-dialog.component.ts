import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {InputDialogData} from "./InputDialogData";

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.less']
})
export class InputDialogComponent {
    @Input()
    public inputLabel = "Label";

    public value?: string;

    public constructor(private dialog: MatDialogRef<InputDialogComponent, string | undefined>,
                       @Inject(MAT_DIALOG_DATA) public data: InputDialogData) {
    }

    public onClose() {
        this.dialog.close()
    }

    public onInput(e: Event) {
        this.value = (e.target as HTMLInputElement).value;
    }
}
