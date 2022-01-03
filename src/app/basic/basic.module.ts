import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "./card/card.component";
import {DraggingElementComponent} from "./dragging-element/dragging-element.component";
import {SimpleErrorComponent} from './simple-error/simple-error.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {InputDialogComponent} from './input-dialog/input-dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {ErrorDialogComponent} from './error-dialog/error-dialog.component';
import { SimpleInfoComponent } from './simple-info/simple-info.component';
import { SavedDisplayComponent } from './saved-display/saved-display.component';
import { SaveNameDialogComponent } from './save-name-dialog/save-name-dialog.component';
import {MatTableModule} from "@angular/material/table";

// Basic and generic components
@NgModule({
    declarations: [
        CardComponent,
        DraggingElementComponent,
        SimpleErrorComponent,
        InputDialogComponent,
        ConfirmDialogComponent,
        ErrorDialogComponent,
        SimpleInfoComponent,
        SavedDisplayComponent,
        SaveNameDialogComponent,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule
    ],
    exports: [
        CardComponent,
        DraggingElementComponent,
        SimpleErrorComponent,
        InputDialogComponent,
        ConfirmDialogComponent,
        SimpleInfoComponent,
        SavedDisplayComponent,
    ]
})
export class BasicModule {}
