import { CreateFormFooter } from "@/Components";
import { FormMode } from "@/enums/form-mode";
import { route } from "@/utils";
import { routes } from "@/constants/routes";
import { useProductFormState } from "./hooks/use-form-state";
import ProductForm from "./components/ProductForm";
import { useCustomMutation } from "@/hooks/use-mutation";

const ProductCreate = () => {
  const { data } = useProductFormState();

  const { submitData, mutationFn, isSuccess } = useCustomMutation({
    key: "products",
  });

  return (
    <ProductForm
      initialData={data}
      mode={FormMode.create}
      mutate={mutationFn}
      formFooter={
        <CreateFormFooter
          isSuccess={isSuccess}
          cancelPath={route(routes.HOME)}
          createdPath={route(routes.HOME)}
        />
      }
    />
  );
};

export default ProductCreate;
