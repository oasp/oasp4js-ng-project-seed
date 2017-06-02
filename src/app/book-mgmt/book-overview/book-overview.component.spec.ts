import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookOverviewComponent} from './book-overview.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BookService} from '../book.service';

describe('BookOverviewComponent', () => {
  let component: BookOverviewComponent;
  let fixture: ComponentFixture<BookOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookOverviewComponent],
      imports: [RouterTestingModule],
      providers: [BookService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
