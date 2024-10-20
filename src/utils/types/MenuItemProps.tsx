import { SubMenuItem } from "./SubMenuItem";

export type MenuItem = {
  title: string;
  url?: string;
  submenu?: SubMenuItem[];
}
