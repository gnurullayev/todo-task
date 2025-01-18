import { CreateFormFooter } from "@/Components";
import { FormMode } from "@/enums/form-mode";
import { route } from "@/utils";
import { routes } from "@/constants/routes";
import { useCategoryFormState } from "./hooks/use-form-state";
import CategoryForm from "./components/CategoryForm";
import { ICategory } from "@/interfaces/category";
import { dispatch } from "@/redux";
import { message } from "antd";
import { useState } from "react";

const CategoryCreate = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { data, categories } = useCategoryFormState();

  const onSubmit = (data: ICategory) => {
    const sameProduct = categories.find(
      (category: ICategory) => category.name === data.name
    );
    if (sameProduct) {
      message.error("Bu ketegoriya mavjud");
    } else {
      setIsSuccess(true);
      dispatch.products.changeCategories([data, ...categories]);
    }
  };
  return (
    <CategoryForm
      initialData={data}
      mode={FormMode.create}
      mutate={onSubmit}
      formFooter={
        <CreateFormFooter
          isSuccess={isSuccess}
          cancelPath={route(routes.CATEGORIES)}
          createdPath={route(routes.CATEGORIES)}
        />
      }
    />
  );
};

export default CategoryCreate;
