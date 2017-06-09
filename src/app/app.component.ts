import { AfterContentChecked, Component } from '@angular/core';
import { TdMediaService } from '@covalent/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements AfterContentChecked {

  constructor(public media: TdMediaService,
              private _iconRegistry: MdIconRegistry,
              private _domSanitizer: DomSanitizer) {
    // Create OASP icon
    this._iconRegistry.addSvgIconInNamespace('assets', 'oasp',
    this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/oasp.svg'));
  }

  ngAfterContentChecked(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
  }
}
