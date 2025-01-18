import { Button } from "@/Components/common/Button";
import { routes } from "@/constants/routes";
import { route } from "@/utils";
import { DeleteConfirmationModal } from "@/Components";
import { useCustomNavigate } from "@/hooks/use-custom-navigate";
import { ICategory } from "@/interfaces/category";
import { Table } from "@/Components/common/Table";
import { message, Tag } from "antd";
import { useSelector } from "react-redux";
import { dispatch, RootState } from "@/redux";

const Categories = () => {
  const { customNavigate, search } = useCustomNavigate();
  const categories: ICategory[] = useSelector(
    (state: RootState) => state.products.categories
  );

  const deleteCategory = (id: string) => {
    const filteredCategories = categories.filter(
      (category: ICategory) => String(category.id) !== id
    );
    dispatch.products.changeCategories(filteredCategories);
    message.success("Kategoriya o'chirildi");
  };

  const columns: any = [
    {
      title: "Kategory nomi",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Holati",
      key: "is_active",
      render: (_: any, record: ICategory) => (
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
      render: (_: any, record: ICategory) => (
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Button
            type="primary"
            onClick={() =>
              customNavigate(
                route(routes.CATEGORIES_EDIT, { id: record.id as string }),
                search
              )
            }
            label={"Tahrirlash"}
          />

          <Button
            type="link"
            onClick={() =>
              customNavigate(
                route(routes.CATEGORIES_SHOW, { id: record.id as string }),
                search
              )
            }
            label={"Ko'rish"}
          />

          <DeleteConfirmationModal
            id={record.id as string}
            title="Category"
            key="category"
            deleteData={deleteCategory}
          />
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      rowKey="id"
      createUrl={routes.CATEGORIES_CREATE}
      dataSource={categories}
    />
  );
};

export default Categories;
