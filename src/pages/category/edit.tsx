import { EditFormFooter } from "@/Components";
import { FormMode } from "@/enums/form-mode";
import { route } from "@/utils";
import { routes } from "@/constants/routes";
import { useState } from "react";
import { dispatch } from "@/redux";
import { useCategoryFormState } from "./hooks/use-form-state";
import CategoryForm from "./components/CategoryForm";
import { ICategory } from "@/interfaces/category";
import { message } from "antd";

const CategoryEdit = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { data, categories } = useCategoryFormState();

  const onSubmit = (data: ICategory) => {
    const sameProduct = categories.find(
      (category: ICategory) =>
        category.name === data.name && String(category.id) !== data.id
    );
    if (sameProduct) {
      message.error("Bunday nomli ketegoriya mavjud");
    } else {
      setIsSuccess(true);
      dispatch.products.changeCategories(
        categories.map((category: ICategory) =>
          String(category.id) === data.id ? data : category
        )
      );
    }
  };

  return (
    <CategoryForm
      initialData={data}
      mode={FormMode.edit}
      mutate={onSubmit}
      formFooter={
        <EditFormFooter path={route(routes.CATEGORIES)} isSuccess={isSuccess} />
      }
    />
  );
};

export default CategoryEdit;
