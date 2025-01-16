import { CreateFormFooter } from "@/Components";
import { FormMode } from "@/enums/form-mode";
import { route } from "@/utils";
import { routes } from "@/constants/routes";
import { useCategoryFormState } from "./hooks/use-form-state";
import CategoryForm from "./components/CategoryForm";

const CategoryCreate = () => {
  const { data } = useCategoryFormState();

  return (
    <CategoryForm
      initialData={data}
      mode={FormMode.create}
      formFooter={
        <CreateFormFooter
          isSuccess={true}
          cancelPath={route(routes.CATEGORIES)}
          createdPath={route(routes.CATEGORIES)}
        />
      }
    />
  );
};

export default CategoryCreate;
