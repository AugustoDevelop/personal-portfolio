import { MenuItem } from "./MenuItemProps";

export type NavDropdownProps = {
  submenus: MenuItem[];
  dropdown: boolean;
  depthLevel: number;
  onClick?: (value: string) => void;
  toggleTheme(themeValue: string): void;
}
