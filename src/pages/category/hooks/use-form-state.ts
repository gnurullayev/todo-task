import { ICategory } from "@/interfaces/category";
import { RootState } from "@/redux";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const initialData: ICategory = {
  id: null,
  name: "",
  is_active: true,
};

export const useCategoryFormState = () => {
  const { id: categoryId } = useParams();
  const categories = useSelector(
    (store: RootState) => store.products.categories
  );

  const defaultData: any = useMemo(() => {
    if (categoryId && categories) {
      const category = categories.find(
        (category: ICategory) => String(category.id) === categoryId
      );
      return {
        ...category,
        id: String(category.id),
      };
    } else return initialData;
  }, [categoryId, categories]);

  return { data: defaultData, id: categoryId, categories };
};
