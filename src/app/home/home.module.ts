import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeMainComponent} from './home-main/home-main.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [
        HomeMainComponent,
        WelcomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class HomeModule {}
