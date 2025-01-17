import { EditFormFooter } from "@/Components";
import { FormMode } from "@/enums/form-mode";
import { route } from "@/utils";
import { routes } from "@/constants/routes";
import { useEffect } from "react";
import { dispatch } from "@/redux";
import { useProductFormState } from "./hooks/use-form-state";
import ProductForm from "./components/ProductForm";

const ProductEdit = () => {
  const { data } = useProductFormState();

  useEffect(() => {
    if (data) {
      dispatch.extra.changeExtraData({ pathIdName: data.name });
    }
  }, [data]);

  return (
    <ProductForm
      initialData={data}
      mode={FormMode.edit}
      formFooter={
        <EditFormFooter path={route(routes.CATEGORIES)} isSuccess={false} />
      }
    />
  );
};

export default ProductEdit;
