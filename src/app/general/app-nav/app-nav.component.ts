import {Component} from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './app-nav.component.html'
})
export class AppNavComponent {

    navCollapsed: boolean = true;

    toggleNavigation(): void {
        this.navCollapsed = !this.navCollapsed;
    };
}
