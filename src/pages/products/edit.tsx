import { EditFormFooter } from "@/Components";
import { FormMode } from "@/enums/form-mode";
import { route } from "@/utils";
import { routes } from "@/constants/routes";
import { useState } from "react";
import { dispatch } from "@/redux";
import { useProductFormState } from "./hooks/use-form-state";
import ProductForm from "./components/ProductForm";
import { IProduct } from "@/interfaces/product";
import { message } from "antd";

const ProductEdit = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { data, products, categories } = useProductFormState();

  const onSubmit = (data: IProduct) => {
    const sameProduct = products.find(
      (product: IProduct) =>
        product.title === data.title && String(product.id) !== data.id
    );
    if (sameProduct) {
      message.error("Bunday nomli mahsulot mavjud");
    } else {
      setIsSuccess(true);
      dispatch.products.changeProducts(
        products.map((product: IProduct) =>
          String(product.id) === data.id ? data : product
        )
      );
    }
  };

  return (
    <ProductForm
      initialData={data}
      mode={FormMode.edit}
      mutate={onSubmit}
      categories={categories}
      formFooter={
        <EditFormFooter path={route(routes.HOME)} isSuccess={isSuccess} />
      }
    />
  );
};

export default ProductEdit;
