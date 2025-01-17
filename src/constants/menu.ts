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
  { name: "Categories", path: routes.CATEGORIES, icon: ProductOutlined },
  { name: "Products", path: routes.HOME, icon: ProductOutlined },
];
