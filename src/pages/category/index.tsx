import React, { useEffect, useState } from "react";
import { Button } from "@/Components/common/Button";
import { routes } from "@/constants/routes";
import { route } from "@/utils";
import { DeleteConfirmationModal } from "@/Components";
import { useCustomNavigate } from "@/hooks/use-custom-navigate";
import { ICategory } from "@/interfaces/category";
import { useTableSearch } from "@/hooks/use-table-search";
import { Table } from "antd";

interface MyDataType {
  id: string;
  s: string;
}

const Categories = () => {
  const { customNavigate, search } = useCustomNavigate();
  const [customParams, setCustomParams] = useState({
    s: "",
  });
  const { getColumnSearchProps, searchText, searchedColumn } =
    useTableSearch<MyDataType>();

  useEffect(() => {
    if (searchedColumn) {
      setCustomParams((prev) => ({
        ...prev,
        [searchedColumn]: searchText ? searchText : "",
      }));
    }
  }, [searchedColumn, searchText]);

  const columns: any = [
    {
      title: "name",
      dataIndex: "name",
      sorter: true,
      key: "name",
      ...getColumnSearchProps("s", "input"),
    },
    {
      title: "Action",
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
            deletePromiseFn={() => ""}
            title="Category"
          />
        </div>
      ),
    },
  ];

  return <Table columns={columns} rowKey="id" />;
};

export default Categories;
