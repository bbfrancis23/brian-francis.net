export interface NavItem {
  label: string;
  icon?: string;
  link?: string;
  title?: string;
  tooltip?: string;
  items?: NavItem;
}

export interface Navigation {
  title?: NavItem;
  items?: NavItem[];
}
