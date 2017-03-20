import {Routes} from '@angular/router';
import {BookOverviewComponent} from './book-mgmt/book-overview/book-overview.component';
import {BookDetailsComponent} from './book-mgmt/book-details/book-details.component';

export const APP_ROUTES: Routes = [
  {
    path: 'book-mgmt/books',
    component: BookOverviewComponent
  },
  {
    path: 'book-mgmt/book',
    component: BookDetailsComponent
  },
  {
    path: 'book-mgmt/book/:bookId',
    component: BookDetailsComponent
  },
  {
    path: '',
    redirectTo: '/book-mgmt/books',
    pathMatch: 'full'
  }
];
