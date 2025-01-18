import { CreateFormFooter } from "@/Components";
import { FormMode } from "@/enums/form-mode";
import { route } from "@/utils";
import { routes } from "@/constants/routes";
import { useProductFormState } from "./hooks/use-form-state";
import ProductForm from "./components/ProductForm";
import { useState } from "react";
import { IProduct } from "@/interfaces/product";
import { message } from "antd";
import { dispatch } from "@/redux";

const ProductCreate = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { data, products, categories } = useProductFormState();

  console.log(categories);

  const onSubmit = (data: IProduct) => {
    const sameProduct = products.find(
      (product: IProduct) => product.title === data.title
    );
    console.log(data, sameProduct, products);
    if (sameProduct) {
      message.error("Bu mahsulot mavjud");
    } else {
      setIsSuccess(true);
      dispatch.products.changeProducts([data, ...products]);
    }
  };

  return (
    <ProductForm
      initialData={data}
      mode={FormMode.create}
      mutate={onSubmit}
      categories={categories}
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
