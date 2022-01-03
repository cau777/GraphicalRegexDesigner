import {Component} from '@angular/core';
import {LocalStorageService} from "../../local-storage.service";
import {IExpressionSaveData} from "../../models/SaveData";
import {MatDialog} from "@angular/material/dialog";
import {ErrorDialogComponent} from "../../basic/error-dialog/error-dialog.component";
import {RegexBuilderService} from "../../regex-builder.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-home-main',
    templateUrl: './home-main.component.html',
    styleUrls: ['./home-main.component.less']
})
export class HomeMainComponent {
    public selected?: IExpressionSaveData;

    public constructor(public storageService: LocalStorageService,
                       private dialog: MatDialog,
                       private regexBuilder: RegexBuilderService,
                       private router: Router) {
    }

    public async load() {
        if (!this.selected) {
            this.dialog.open<ErrorDialogComponent, string>(ErrorDialogComponent, {
                data: "Please select a saved expression below"
            });
        } else {
            try {
                this.storageService.loadExpression(this.selected.name, this.regexBuilder);
            } catch (e) {
                console.log(e);
                this.dialog.open<ErrorDialogComponent, string>(ErrorDialogComponent, {
                    data: "An error occurred while loading: " + (e as Error).name
                });
            }
            await this.router.navigateByUrl("/create");
        }
    }
}
