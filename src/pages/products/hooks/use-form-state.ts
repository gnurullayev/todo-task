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

  return { data: defaultData, id: productId, products };
};
