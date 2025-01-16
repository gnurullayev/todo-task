import { ShowFormFooter } from "@/Components";
import { FormMode } from "@/enums/form-mode";
import { route } from "@/utils";
import { routes } from "@/constants/routes";
import { useEffect } from "react";
import { dispatch } from "@/redux";
import CategoryForm from "./components/CategoryForm";
import { useCategoryFormState } from "./hooks/use-form-state";

const CategoryShow = () => {
  const { data, id } = useCategoryFormState();

  useEffect(() => {
    if (data) {
      dispatch.extra.changeExtraData({ pathIdName: data.name });
    }
  }, [data]);

  return (
    <CategoryForm
      initialData={data}
      mode={FormMode.view}
      formFooter={
        <ShowFormFooter
          path={route(routes.CATEGORIES_EDIT, { id })}
          cancelRedirectPath={routes.CATEGORIES}
        />
      }
    />
  );
};

export default CategoryShow;
