import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { GeneralModule } from './general/general.module';
import { BookMgmtModule } from './book-mgmt/book-mgmt.module';
import { CovalentModule } from './covalent/covalent.module';
import { HttpModule } from '@angular/http';
import { BookService } from './book-mgmt/book.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
        CovalentModule,
        GeneralModule,
        HttpModule,
        BookMgmtModule
      ],
      providers: [BookService],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render navigation bar', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('td-layout-nav-list md-nav-list app-nav')).toBeTruthy();
  }));
});
