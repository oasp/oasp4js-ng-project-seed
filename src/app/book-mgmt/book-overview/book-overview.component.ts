import { Component, OnInit } from '@angular/core';
import {Book, BookService} from '../book.service';

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html'
})
export class BookOverviewComponent implements OnInit {

  currentBooks: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.currentBooks = this.bookService.findAll();
  }

  thereAreBooksToDisplay(): boolean {
    return this.currentBooks && this.currentBooks.length > 0;
  }
}
