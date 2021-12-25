import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {RegexTestingComponent} from './regex-testing/regex-testing.component';
import {RegexBuilderComponent} from './regex-builder/regex-builder.component';
import {RegexOutputComponent} from './regex-output/regex-output.component';
import {HeaderComponent} from './header/header.component';
import {RegexOptionsComponent} from './regex-options/regex-options.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {RegexTokenGraphicsComponent} from './regex-token-graphics/regex-token-graphics.component';
import {AvailableTokensComponent} from './available-tokens/available-tokens.component';
import {RegexTokenComponent} from './regex-token/regex-token.component';
import {BasicModule} from "./basic/basic.module";
import {RegexTokenDisposalComponent} from './regex-token-disposal/regex-token-disposal.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {TokenHeaderInputComponent} from './token-header-input/token-header-input.component';
import {RegexVariableComponent} from './regex-variable/regex-variable.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import { RegexTokenHeaderComponent } from './regex-token-header/regex-token-header.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RegexTestingComponent,
        RegexBuilderComponent,
        RegexOutputComponent,
        HeaderComponent,
        RegexOptionsComponent,
        RegexTokenGraphicsComponent,
        AvailableTokensComponent,
        RegexTokenComponent,
        RegexTokenDisposalComponent,
        TokenHeaderInputComponent,
        RegexVariableComponent,
        RegexTokenHeaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        BasicModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
