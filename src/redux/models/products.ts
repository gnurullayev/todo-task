import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { IProduct } from "@/interfaces/product";

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
    addProduct(state, payload: ProductsState) {
      return { ...state, products: payload };
    },
    changeProducts(state, payload: IProduct[]) {
      return { ...state, products: payload };
    },

    changeCategories(state, payload: ProductsState) {
      return { ...state, categories: payload };
    },
  },
});
