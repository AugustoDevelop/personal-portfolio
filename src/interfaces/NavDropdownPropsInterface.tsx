import { MenuItem } from "./MenuItemInterface";

export interface NavDropdownProps {
  submenus: MenuItem[];
  dropdown: boolean;
  depthLevel: number;
  onClick?: (value: string) => void;
  toggleTheme(themeValue: string): void;
}
