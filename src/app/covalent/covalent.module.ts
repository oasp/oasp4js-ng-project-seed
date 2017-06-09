import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { CovalentChipsModule,
         CovalentLayoutModule,
         CovalentExpansionPanelModule,
         CovalentDataTableModule,
         CovalentSearchModule,
         CovalentPagingModule,
         CovalentDialogsModule,
         CovalentNotificationsModule,
         CovalentCommonModule,
         CovalentMediaModule } from '@covalent/core';
import 'hammerjs';


@NgModule({
  exports: [
    CommonModule,
    MaterialModule,
    CovalentChipsModule,
    CovalentLayoutModule,
    CovalentExpansionPanelModule,
    CovalentDataTableModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentDialogsModule,
    CovalentNotificationsModule,
    CovalentCommonModule,
    CovalentMediaModule,
  ],
  declarations: [],
  providers: [],
})

export class CovalentModule { }
