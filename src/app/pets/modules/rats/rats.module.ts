import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatsRoutingModule } from './rats-routing.module';
import { RatsComponent } from './rats.component';


@NgModule({
  declarations: [
    RatsComponent
  ],
  imports: [
    CommonModule,
    RatsRoutingModule
  ]
})
export class RatsModule { }
