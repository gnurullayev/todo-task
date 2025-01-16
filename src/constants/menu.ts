import { ProductOutlined } from "@ant-design/icons";
import { routes } from "./routes";

interface Item {
  name: string;
  icon: any;
  path: string;
}

interface MenuItem extends Item {
  sub?: Item[];
}

export const menuItems = (): MenuItem[] => [
  { name: "Category", path: routes.CATEGORIES, icon: ProductOutlined },
];
