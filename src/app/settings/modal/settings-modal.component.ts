import { Component } from '@angular/core';
import {ThemeService} from '../../../../AquA/angular-material-theme/ng-mat-theme.service';

import { AngularMaterialThemes} from '../../../../AquA/angular-material-theme/ng-mat-theme';
@Component({
  templateUrl: 'settings-modal.component.html'
})
export class SettingsModalComponent {

  themes = AngularMaterialThemes;
  constructor(public themeService: ThemeService) {}
}
