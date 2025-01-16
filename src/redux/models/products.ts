import { createModel } from "@rematch/core";
import { RootModel } from ".";

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
    changeProducts(state, payload: ProductsState) {
      return { ...state, products: payload };
    },

    changeCategories(state, payload: ProductsState) {
      return { ...state, categories: payload };
    },
  },
});
