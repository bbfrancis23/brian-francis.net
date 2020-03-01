import { Component } from '@angular/core';
import { ThemeService } from '../../AquA/angular-material-theme/ng-mat-theme.service';

interface Person {
  readonly firstName: string;
  readonly lastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {


  constructor( public themeService: ThemeService ) {}


}
