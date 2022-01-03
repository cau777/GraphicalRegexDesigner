import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: "", loadChildren: () => import("./home/home.module").then(o => o.HomeModule)},
    {path: "create", loadChildren: () => import("./designer/designer.module").then(o => o.DesignerModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
