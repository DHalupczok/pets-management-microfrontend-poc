import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PetsComponent} from "./pets.component";

const routes: Routes = [{path: '',  component: PetsComponent,
  children: [
    {path: 'dogs', loadChildren: () => import('./modules/dogs/dogs.module')
      .then(m => m.DogsModule)},
    {path: 'cats', loadChildren: () => import('./modules/cats/cats.module')
        .then(m => m.CatsModule)},
    {path: "rats", loadChildren: () => import('./modules/rats/rats.module')
        .then(m => m.RatsModule)}]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule {
}
