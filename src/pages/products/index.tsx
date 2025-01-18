import { Button } from "@/Components/common/Button";
import { routes } from "@/constants/routes";
import { route } from "@/utils";
import { DeleteConfirmationModal } from "@/Components";
import { useCustomNavigate } from "@/hooks/use-custom-navigate";
import { Table } from "@/Components/common/Table";
import { message, Tag } from "antd";
import { IProduct } from "@/interfaces/product";
import { useSelector } from "react-redux";
import { dispatch } from "@/redux";

const Products = () => {
  const { customNavigate, search } = useCustomNavigate();
  const products: IProduct[] = useSelector(
    (state: any) => state.products.products
  );

  const deleteProduct = (id: string) => {
    const filteredProducts = products.filter(
      (product: IProduct) => String(product.id) !== id
    );
    dispatch.products.changeProducts(filteredProducts);
    message.success("Mahsulot o'chirildi");
  };

  const columns: any = [
    {
      title: "Mahsulot nomi",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Mahsulot ma'lumoti",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Mahsulot narxi",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Holati",
      key: "is_active",
      render: (_: any, record: IProduct) => (
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Tag color={record.is_active ? "success" : "warning"}>
            {record.is_active ? "Faol" : "No faol"}
          </Tag>
        </div>
      ),
    },
    {
      title: "",
      key: "action",
      render: (_: any, record: IProduct) => (
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Button
            type="primary"
            onClick={() =>
              customNavigate(
                route(routes.PRODUCTS_EDIT, { id: record.id as string }),
                search
              )
            }
            label={"Tahrirlash"}
          />

          <Button
            type="link"
            onClick={() =>
              customNavigate(
                route(routes.PRODUCTS_SHOW, { id: record.id as string }),
                search
              )
            }
            label={"Ko'rish"}
          />

          <DeleteConfirmationModal
            id={record.id as string}
            title="Mahsulot"
            key="products"
            deleteData={deleteProduct}
          />
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      rowKey="id"
      createUrl={routes.PRODUCTS_CREATE}
      dataSource={products}
    />
  );
};

export default Products;
