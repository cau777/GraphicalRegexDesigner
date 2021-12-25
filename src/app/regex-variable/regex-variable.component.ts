import {ApplicationRef, ChangeDetectorRef, Component, Input, NgZone} from '@angular/core';
import {RegexBuilderService} from "../regex-builder.service";
import {RegexToken} from "../models/RegexToken";
import {MatDialog} from "@angular/material/dialog";
import {InputDialogComponent} from "../basic/input-dialog/input-dialog.component";
import {InputDialogData} from "../basic/input-dialog/InputDialogData";

@Component({
    selector: 'app-regex-variable',
    templateUrl: './regex-variable.component.html',
    styleUrls: ['./regex-variable.component.less']
})
export class RegexVariableComponent {
    @Input()
    public token!: RegexToken;

    public constructor(public regexBuilder: RegexBuilderService,
                       private dialog: MatDialog,
                       private application: ApplicationRef,
                       private changeDetector: ChangeDetectorRef,
                       private zone: NgZone) {
    }

    public rename() {
        let dialogRef = this.dialog.open<InputDialogComponent, InputDialogData, string | undefined>(InputDialogComponent, {
            data: {
                prompt: "Renaming " + this.token.name,
            },
        });

        dialogRef.afterClosed().subscribe(result => {
            if (!result) return;
            if (result.length === 1) return;
            this.zone.run(() => {
                this.regexBuilder.rename(this.token.name, result);
            })
        })
    }
}
