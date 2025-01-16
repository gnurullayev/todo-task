import { EditFormFooter } from "@/Components";
import { FormMode } from "@/enums/form-mode";
import { route } from "@/utils";
import { routes } from "@/constants/routes";
import { useEffect } from "react";
import { dispatch } from "@/redux";
import { useCategoryFormState } from "./hooks/use-form-state";
import CategoryForm from "./components/CategoryForm";

const CategoryEdit = () => {
  const { data } = useCategoryFormState();

  useEffect(() => {
    if (data) {
      dispatch.extra.changeExtraData({ pathIdName: data.name });
    }
  }, [data]);

  return (
    <CategoryForm
      initialData={data}
      mode={FormMode.edit}
      formFooter={
        <EditFormFooter path={route(routes.CATEGORIES)} isSuccess={true} />
      }
    />
  );
};

export default CategoryEdit;
