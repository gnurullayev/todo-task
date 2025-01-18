import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { IProduct } from "@/interfaces/product";
import { ICategory } from "@/interfaces/category";

interface ProductsState {
  products: any;
  categories: any;
}

const initialState: ProductsState = {
  products: [],
  categories: [],
};

export const products = createModel<RootModel>()({
  state: initialState,
  reducers: {
    changeProducts(state, payload: IProduct[]) {
      return { ...state, products: payload };
    },

    changeCategories(state, payload: ICategory[]) {
      return { ...state, categories: payload };
    },
  },
});
