import { Component } from '@angular/core';
import { ThemeService } from '../../AquA/angular-material-theme/ng-mat-theme.service';
import {AppConfig} from './app.config';

interface Person {
  readonly firstName: string;
  readonly lastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  readonly appConfig = new AppConfig();
  constructor( public themeService: ThemeService ) {}
}
