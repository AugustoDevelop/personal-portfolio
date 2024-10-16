import { SubMenuItem } from "./SubMenuItemInterface";

export interface MenuItem {
  title: string;
  url?: string;
  submenu?: SubMenuItem[];
}
