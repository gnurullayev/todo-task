import { ShowFormFooter } from "@/Components";
import { FormMode } from "@/enums/form-mode";
import { route } from "@/utils";
import { routes } from "@/constants/routes";
import { useProductFormState } from "./hooks/use-form-state";
import ProductForm from "./components/ProductForm";

const ProductShow = () => {
  const { data, id, categories } = useProductFormState();

  return (
    <ProductForm
      initialData={data}
      mode={FormMode.view}
      categories={categories}
      formFooter={
        <ShowFormFooter
          path={route(routes.PRODUCTS_EDIT, { id })}
          cancelRedirectPath={routes.HOME}
        />
      }
    />
  );
};

export default ProductShow;
