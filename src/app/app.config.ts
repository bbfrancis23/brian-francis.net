import {Navigation, NavItem} from '../../AquA/nav/nav';

export class AppConfig {
  readonly title: NavItem = { label: 'Brian-Francis.net'};
  readonly appNav: Navigation = {
    items: [
      { label: 'Application Navigation', icon: 'menu', },
      { label: 'Settings', icon: 'settings'} ]};
}

