import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RatsComponent} from "./rats.component";

const routes: Routes = [{path: '', pathMatch: "full", component: RatsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatsRoutingModule { }
