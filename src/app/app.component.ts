import { Component } from '@angular/core';
import { ThemeService } from '../../AquA/angular-material-theme/ng-mat-theme.service';
import {Navigation} from '../../AquA/nav/nav';
import {MatDialog} from '@angular/material/dialog';
import { SettingsModalComponent } from './settings/modal/settings-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  readonly appNav: Navigation = {
    items: [
      { label: 'Application Navigation', icon: 'menu', },
      { label: 'Brian-Francis.net', link: '/', class: 'app-title'}
       ]};

  readonly rightNav: Navigation = {
    items: [
      { label: 'Settings', icon: 'settings',
        click: () => this.settingsModal.open( SettingsModalComponent,
          {position: {top: '100px', right: '50px'}})
          }
      ]};

  constructor( public themeService: ThemeService, public settingsModal: MatDialog ) {}


}
