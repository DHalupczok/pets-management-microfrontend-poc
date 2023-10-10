import {NgModule} from '@angular/core';
import {RouteReuseStrategy, RouterModule, Routes} from '@angular/router';
import {CustomRouteReuseStrategy} from "./pets/customRouteReuseStrategy";

const routes: Routes = [{path: "pets", loadChildren: () => import("./pets/pets.module").then(m => m.PetsModule)}, {
  path: '',
  redirectTo: 'pets',
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], providers: []
})
export class AppRoutingModule {
}
