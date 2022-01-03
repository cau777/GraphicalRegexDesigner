import {Component} from '@angular/core';
import {DragService} from "../../drag.service";
import {RegexBuilderService} from "../../regex-builder.service";
import {MatDialog} from "@angular/material/dialog";
import {SaveNameDialogComponent} from "../../basic/save-name-dialog/save-name-dialog.component";
import {LocalStorageService} from "../../local-storage.service";
import {ConfirmDialogComponent} from "../../basic/confirm-dialog/confirm-dialog.component";

@Component({
    selector: 'app-regex-builder',
    templateUrl: './regex-builder.component.html',
    styleUrls: ['./regex-builder.component.less']
})
export class RegexBuilderComponent {
    public constructor(public dragService: DragService,
                       public regexBuilder: RegexBuilderService,
                       private dialog: MatDialog,
                       private storageService: LocalStorageService) {
    }

    public save() {
        this.dialog.open<SaveNameDialogComponent, undefined, string | undefined>(SaveNameDialogComponent).afterClosed().subscribe(result => {
            if (!result) return;
            const overwrites = this.storageService.expressions.findIndex(o => o.name === result) !== -1;

            this.dialog.open<ConfirmDialogComponent, string, boolean>(ConfirmDialogComponent, {
                data: "Saving as " + result + "." + (overwrites ? " Warning: This will overwrite a previous save." : "")
            }).afterClosed().subscribe(confirmed => {
                if (confirmed)
                    this.storageService.saveExpression(result, this.regexBuilder);
            })
        })
    }
}
