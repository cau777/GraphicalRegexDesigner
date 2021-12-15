import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegexTestingComponent } from './regex-testing/regex-testing.component';
import { RegexBuilderComponent } from './regex-builder/regex-builder.component';
import { RegexOutputComponent } from './regex-output/regex-output.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { RegexOptionsComponent } from './regex-options/regex-options.component';
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegexTestingComponent,
    RegexBuilderComponent,
    RegexOutputComponent,
    HeaderComponent,
    CardComponent,
    RegexOptionsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCheckboxModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
