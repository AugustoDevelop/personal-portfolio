import { SubMenuItem } from "./SubMenuItem";

export interface MenuItem {
  title: string;
  url?: string;
  submenu?: SubMenuItem[];
}
