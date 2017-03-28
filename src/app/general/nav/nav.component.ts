import {Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {

  navCollapsed: boolean = true;

  toggleNavigation(): void {
    this.navCollapsed = !this.navCollapsed;
  };
}
