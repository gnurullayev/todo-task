import { ShowFormFooter } from "@/Components";
import { FormMode } from "@/enums/form-mode";
import { route } from "@/utils";
import { routes } from "@/constants/routes";
import { useEffect } from "react";
import { dispatch } from "@/redux";
import { useProductFormState } from "./hooks/use-form-state";
import ProductForm from "./components/ProductForm";

const ProductShow = () => {
  const { data, id } = useProductFormState();

  useEffect(() => {
    if (data) {
      dispatch.extra.changeExtraData({ pathIdName: data.name });
    }
  }, [data]);

  return (
    <ProductForm
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

export default ProductShow;
