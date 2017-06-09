import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CovalentModule } from '../covalent/covalent.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CovalentModule
  ],
  declarations: [NavComponent],
  exports: [NavComponent]
})
export class GeneralModule {
}
