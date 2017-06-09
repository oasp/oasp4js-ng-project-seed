import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CovalentModule } from './covalent/covalent.module';
import { GeneralModule } from './general/general.module';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routing';
import { BookService } from './book-mgmt/book.service';
import { BookMgmtModule } from './book-mgmt/book-mgmt.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    CovalentModule,
    GeneralModule,
    BookMgmtModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
