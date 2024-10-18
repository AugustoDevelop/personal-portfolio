import { MenuItem } from "./MenuItemProps";

export type MenuItemsProps = {
  items: MenuItem;
  depthLevel: number;
  onClick?: (value: string) => void;
  toggleTheme(themeValue: string): void;
}
