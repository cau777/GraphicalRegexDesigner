import {Component, Input} from '@angular/core';
import {RegexBuilderService} from "../regex-builder.service";
import {RegexToken} from "../models/RegexToken";
import {MatDialog} from "@angular/material/dialog";
import {InputDialogComponent} from "../basic/input-dialog/input-dialog.component";
import {IInputDialogData} from "../basic/input-dialog/IInputDialogData";
import {ConfirmDialogComponent} from "../basic/confirm-dialog/confirm-dialog.component";
import {ErrorDialogComponent} from "../basic/error-dialog/error-dialog.component";

@Component({
    selector: 'app-regex-variable',
    templateUrl: './regex-variable.component.html',
    styleUrls: ['./regex-variable.component.less']
})
export class RegexVariableComponent {
    @Input()
    public token!: RegexToken;

    public constructor(public regexBuilder: RegexBuilderService,
                       private dialog: MatDialog) {
    }

    public rename() {
        let dialogRef = this.dialog.open<InputDialogComponent, IInputDialogData, string | undefined>(InputDialogComponent, {
            data: {
                prompt: "Renaming " + this.token.name,
            },
        });

        dialogRef.afterClosed().subscribe(result => {
            if (!result) return;
            if (result.length === 1) return;

            try {
                this.regexBuilder.rename(this.token.name, result);
            } catch (e) {
                if (e instanceof Error) {
                    this.dialog.open<ErrorDialogComponent, string>(ErrorDialogComponent, {
                        data: e.message
                    });
                }
            }
        })
    }

    public remove() {
        let references = this.regexBuilder.getVariableReferences(this.token.name);

        if (references.length !== 0) {
            let dialogRef = this.dialog.open<ConfirmDialogComponent, string, boolean>(ConfirmDialogComponent, {
                data: "This variable is referenced on '" + references.join("', '") + "'. Proceed?"
            });

            dialogRef.afterClosed().subscribe(result => {
                if (result)
                    this.regexBuilder.removeVariable(this.token.name);
            });
        } else {
            this.regexBuilder.removeVariable(this.token.name);
        }
    }
}
