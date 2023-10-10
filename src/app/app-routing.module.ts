import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{path: "pets", loadChildren: () => import("./pets/pets.module").then(m => m.PetsModule)}, {
  path: '',
  redirectTo: 'pets',
  pathMatch: 'full',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
