import { MenuItem } from "./MenuItemProps";

export interface MenuItemsProps {
  items: MenuItem;
  depthLevel: number;
  onClick?: (value: string) => void;
  toggleTheme(themeValue: string): void;
}
