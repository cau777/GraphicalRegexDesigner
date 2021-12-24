import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "./card/card.component";
import {DraggingElementComponent} from "./dragging-element/dragging-element.component";
import { SimpleErrorComponent } from './simple-error/simple-error.component';

// Basic and generic components
@NgModule({
    declarations: [
        CardComponent,
        DraggingElementComponent,
        SimpleErrorComponent
    ],
    imports: [
        CommonModule
    ],
    exports:[
        CardComponent,
        DraggingElementComponent,
        SimpleErrorComponent
    ]
})
export class BasicModule {}
