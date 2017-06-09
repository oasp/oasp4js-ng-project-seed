import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CovalentModule } from '../../covalent/covalent.module';
import { BookService } from '../book.service';
import { BookOverviewComponent} from './book-overview.component';

describe('BookOverviewComponent', () => {
  let component: BookOverviewComponent;
  let fixture: ComponentFixture<BookOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookOverviewComponent],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        CovalentModule
      ],
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
