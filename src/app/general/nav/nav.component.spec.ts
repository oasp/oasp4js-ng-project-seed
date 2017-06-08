import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CovalentModule } from '../../covalent/covalent.module';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CovalentModule
      ],
      declarations: [NavComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render links to dialogs', async(() => {
    fixture = TestBed.createComponent(NavComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const linkElements = compiled.querySelectorAll('span a');
    console.log(linkElements[0].querySelector('h3').textContent);
    expect(linkElements[0].querySelector('h3').textContent).toContain('Book Overview');
    expect(linkElements[1].querySelector('h3').textContent).toContain('New Book');
  }));
});
