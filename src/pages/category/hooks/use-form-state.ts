import { ICategory } from "@/interfaces/category";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

const initialData: ICategory = {
  id: null,
  name: "",
  is_active: true,
  short_content: "",
  description: "",
};

export const useCategoryFormState = () => {
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
