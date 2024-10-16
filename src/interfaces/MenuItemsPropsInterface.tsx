import { MenuItem } from "./MenuItemInterface";

export interface MenuItemsProps {
  items: MenuItem;
  depthLevel: number;
  onClick?: (value: string) => void;
  toggleTheme(themeValue: string): void;
}
