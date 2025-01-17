import { IProduct } from "@/interfaces/product";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

const initialData: IProduct = {
  id: null,
  title: "",
  price: 0,
  description: "",
  is_active: true,
};

export const useProductFormState = () => {
  const { id: categoryId } = useParams();

  const submitData = {};

  const defaultData: any = useMemo(() => {
    if (categoryId && submitData) {
      return {
        ...submitData,
      };
    } else return initialData;
  }, [categoryId, submitData]);

  return { data: defaultData, id: categoryId };
};
