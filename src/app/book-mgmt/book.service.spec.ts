import { TestBed, inject } from '@angular/core/testing';

import {BookService, Book} from './book.service';

describe('BookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookService]
    });
  });

  it('should save a book', inject([BookService], (service: BookService) => {
    // given
    const book:Book = new Book('John Example', 'By Example');
    // when
    service.save(book);
    // then
    const foundBooks:Book[] = service.findAll();
    expect(foundBooks.length).toBe(1);
    expect(foundBooks[0]).toBe(book);
  }));

  it('should find a book', inject([BookService], (service: BookService) => {
    // given
    const book:Book = new Book('John Example', 'By Example');
    service.save(book);
    // when
    const foundBook:Book = service.findOne(book.id);
    // then
    expect(foundBook).toEqual(foundBook);
  }));
});
