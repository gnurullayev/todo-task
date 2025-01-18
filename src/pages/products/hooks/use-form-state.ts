import { ICategory } from "@/interfaces/category";
import { IProduct } from "@/interfaces/product";
import { RootState } from "@/redux";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const initialData: IProduct = {
  id: null,
  title: "",
  price: 0,
  description: "",
  is_active: true,
};

export const useProductFormState = () => {
  const { id: productId } = useParams();
  const products = useSelector((store: RootState) => store.products.products);
  const categories: ICategory[] = useSelector(
    (store: RootState) => store.products.categories
  );

  const defaultData: any = useMemo(() => {
    if (productId && products) {
      const product = products.find(
        (product: IProduct) => String(product.id) === productId
      );
      return {
        ...product,
        price: String(product.price),
        id: String(product.id),
      };
    } else return initialData;
  }, [productId, products]);

  const filteredCategories: any = useMemo(() => {
    return categories
      .filter((category) => category.is_active)
      .map((category) => ({ value: category.id, label: category.name }));
  }, [categories]);

  return {
    data: defaultData,
    id: productId,
    products,
    categories: filteredCategories,
  };
};
