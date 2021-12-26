import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "./card/card.component";
import {DraggingElementComponent} from "./dragging-element/dragging-element.component";
import {SimpleErrorComponent} from './simple-error/simple-error.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import { InputDialogComponent } from './input-dialog/input-dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

// Basic and generic components
@NgModule({
    declarations: [
        CardComponent,
        DraggingElementComponent,
        SimpleErrorComponent,
        InputDialogComponent,
        ConfirmDialogComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        CardComponent,
        DraggingElementComponent,
        SimpleErrorComponent,
        InputDialogComponent,
        ConfirmDialogComponent
    ]
})
export class BasicModule {}
