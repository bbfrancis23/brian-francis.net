import { Injectable } from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {BehaviorSubject, Observable} from 'rxjs';
import {UnSubscriber} from '../unsubscriber/unsub';
import {AngularMaterialThemes} from './ng-mat-theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService extends UnSubscriber {

  private readonly _theme: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  _lastTheme: string;

  setTheme(theme: string) { this._theme.next(theme); }
  getTheme(): Observable<string> { return this._theme.asObservable(); }


  get lastTheme(): string { return this._lastTheme; }
  set lastTheme(theme) {this._lastTheme = theme; }

  constructor( private overlay: OverlayContainer) {

    super();

    this.subs.push(
      this.getTheme().subscribe( theme => {
        if (theme) {
          if (this.lastTheme) { this.removeLastTheme(); }
          this.lastTheme = theme;
          this.addTheme(theme);
        } else {
          theme = localStorage.getItem('theme');
          if (!theme) { theme = AngularMaterialThemes[0].name; }
          this.setTheme(theme);
        }
      })
    );

  }

  removeLastTheme() {
    const themeTitle = `${this.lastTheme}-theme`;
    this.overlay.getContainerElement().classList.remove(themeTitle);
    document.body.classList.remove(themeTitle);
  }

  addTheme(theme) {
    const themeTitle = `${theme}-theme`;
    this.overlay.getContainerElement().classList.add(themeTitle);
    document.body.classList.add(themeTitle);

    localStorage.setItem('theme', theme);
  }
}
