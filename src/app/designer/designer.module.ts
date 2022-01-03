import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DesignerRoutingModule} from './designer-routing.module';
import {DesignerMainComponent} from './designer-main/designer-main.component';
import {RegexTestingComponent} from "./regex-testing/regex-testing.component";
import {RegexBuilderComponent} from "./regex-builder/regex-builder.component";
import {RegexOutputComponent} from "./regex-output/regex-output.component";
import {RegexOptionsComponent} from "./regex-options/regex-options.component";
import {RegexTokenGraphicsComponent} from "./regex-token-graphics/regex-token-graphics.component";
import {AvailableTokensComponent} from "./available-tokens/available-tokens.component";
import {RegexTokenComponent} from "./regex-token/regex-token.component";
import {RegexTokenDisposalComponent} from "./regex-token-disposal/regex-token-disposal.component";
import {TokenHeaderInputComponent} from "./token-header-input/token-header-input.component";
import {RegexVariableComponent} from "./regex-variable/regex-variable.component";
import {RegexTokenHeaderComponent} from "./regex-token-header/regex-token-header.component";
import {RegexTestingMatchesComponent} from "./regex-testing-matches/regex-testing-matches.component";
import {BasicModule} from "../basic/basic.module";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
    declarations: [
        DesignerMainComponent,
        RegexTestingComponent,
        RegexBuilderComponent,
        RegexOutputComponent,
        RegexOptionsComponent,
        RegexTokenGraphicsComponent,
        AvailableTokensComponent,
        RegexTokenComponent,
        RegexTokenDisposalComponent,
        TokenHeaderInputComponent,
        RegexVariableComponent,
        RegexTokenHeaderComponent,
        RegexTestingMatchesComponent,
    ],
    exports: [
        RegexTokenDisposalComponent
    ],
    imports: [
        CommonModule,
        DesignerRoutingModule,
        BasicModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatExpansionModule
    ]
})
export class DesignerModule {}
