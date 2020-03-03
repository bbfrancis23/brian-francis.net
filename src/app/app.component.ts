import { Component } from '@angular/core';
import { ThemeService } from '../../AquA/angular-material-theme/ng-mat-theme.service';
import {Navigation, NavItem} from '../../AquA/nav/nav';

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

  readonly title: NavItem = { label: 'Brian-Francis.net'};
  readonly appNav: Navigation = {
    items: [
      { label: 'Application Navigation', icon: 'menu', },
      { label: 'Settings', icon: 'settings'} ]};
  constructor( public themeService: ThemeService ) {}
}
