import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from "./card/card.component";
import {DraggingElementComponent} from "./dragging-element/dragging-element.component";

// Basic and generic components
@NgModule({
    declarations: [
        CardComponent,
        DraggingElementComponent
    ],
    imports: [
        CommonModule
    ],
    exports:[
        CardComponent,
        DraggingElementComponent
    ]
})
export class BasicModule {}
