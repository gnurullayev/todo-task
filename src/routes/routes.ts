import { routes } from "@/constants/routes";

import Categories from "@/pages/category";
import CategoryCreate from "@/pages/category/create";
import CategoryEdit from "@/pages/category/edit";
import CategoryShow from "@/pages/category/show";

export const publicRoutes = [
  {
    path: routes.HOME,
    element: Categories,
  },
  {
    path: routes.CATEGORIES,
    element: Categories,
  },
  {
    path: routes.CATEGORIES_CREATE,
    element: CategoryCreate,
  },
  {
    path: routes.CATEGORIES_EDIT,
    element: CategoryEdit,
  },
  {
    path: routes.CATEGORIES_SHOW,
    element: CategoryShow,
  },
];
