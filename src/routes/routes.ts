import { routes } from "@/constants/routes";
import Categories from "@/pages/category";
import CategoryCreate from "@/pages/category/create";
import CategoryEdit from "@/pages/category/edit";
import CategoryShow from "@/pages/category/show";
import Products from "@/pages/products";
import ProductCreate from "@/pages/products/create";
import ProductEdit from "@/pages/products/edit";
import ProductShow from "@/pages/products/show";

export const publicRoutes = [
  {
    path: routes.HOME,
    element: Products,
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

  //PRODUCTS
  {
    path: routes.PRODUCTS_CREATE,
    element: ProductCreate,
  },
  {
    path: routes.PRODUCTS_EDIT,
    element: ProductEdit,
  },
  {
    path: routes.PRODUCTS_SHOW,
    element: ProductShow,
  },
];
