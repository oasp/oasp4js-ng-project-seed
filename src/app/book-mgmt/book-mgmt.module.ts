import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookOverviewComponent } from './book-overview/book-overview.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CovalentModule } from '../covalent/covalent.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CovalentModule,
    RouterModule
  ],
  declarations: [BookDetailsComponent, BookOverviewComponent]
})
export class BookMgmtModule {
}
