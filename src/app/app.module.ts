import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {GeneralModule} from './general/general.module';
import {BookMgmtModule} from './book-mgmt/book-mgmt.module';
import {APP_ROUTES} from './app.routing';
import {RouterModule} from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [BrowserModule, BookMgmtModule, GeneralModule, RouterModule.forRoot(APP_ROUTES), NgbModule.forRoot()],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
