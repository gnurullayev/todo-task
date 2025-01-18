import React, { useEffect, useState } from "react";
import { ColumnsType, TableLocale } from "antd/lib/table/interface";
import { Table as AntdTable, Button } from "antd";
import {
  TablePaginationConfig,
  TableRowSelection,
} from "antd/es/table/interface";
import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";

export interface TableProps {
  locale?: TableLocale;
  loading?: boolean;
  rowKey?: string;
  saveData?: any;
  columns: ColumnsType<any>;
  dataSource?: object[];
  size?: "small" | "large" | "middle";
  rowClassName?: string;
  onRow?: any;
  onChange?: any;
  disablePagination?: boolean;
  components?: any;
  scroll?: any;
  linkProps?: {
    url: string;
    recordKey?: string;
  };
  url?: string;
  defaultSort?: string;
  enableSelectedRow?: boolean;
  reload?: number;
  setSelectedRows?: any;
  setSelectedKeys?: any;
  rowSelectionFunction?: TableRowSelection<any>;
  pagination?: TablePaginationConfig;
  createUrl?: string;
  refetchData?: string | null;
  customParams?: any;
}

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex?: string;
  record: any;
  className: string;
  colSpan?: number;
}

export const Table = ({
  locale,
  columns,
  dataSource,
  size,
  rowClassName,
  onRow,
  onChange,
  disablePagination,
  components,
  scroll = { x: "max-content" },
  linkProps,
  enableSelectedRow,
  setSelectedRows,
  setSelectedKeys,
  rowSelectionFunction,
  createUrl,
}: TableProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [innerData, setInnerData] = useState<any>(dataSource || []);
  const [currentPage, setCurrentPage] = useState<any>(
    searchParams.has("pi") ? searchParams.get("pi") : 1
  );
  const [localPagination, setLocalPagination] = useState<any>({
    showSizeChanger: false,
    showQuickJumper: false,
  });

  useEffect(() => {
    if (dataSource) {
      setInnerData(dataSource);
    }
  }, [dataSource]);

  useEffect(() => {
    setLocalPagination({
      ...localPagination,
      current: currentPage,
      total: dataSource?.length,
    });
  }, [currentPage]);

  const element = document.getElementsByClassName(
    "anticon anticon-down ant-select-suffix"
  );

  element[0]?.classList?.add("far");
  element[0]?.classList?.add("fa-angle-down");
  element[0]?.classList?.remove("anticon");
  element[0]?.classList?.remove("anticon-down");
  element[0]?.classList?.remove("ant-select-suffix");

  const EditableCell: React.FC<EditableCellProps> = ({
    record,
    children,
    className,
    ...rest
  }) => {
    if (rest.dataIndex === "id" || rest.dataIndex === undefined) {
      return (
        <td className={className} colSpan={rest.colSpan}>
          {children}
        </td>
      );
    }

    let parsedProps = {
      url: linkProps?.url,
      recordKey: linkProps?.recordKey,
    };

    if (!parsedProps?.recordKey) {
      parsedProps.recordKey = "id";
    }

    if (rest.colSpan) {
      parsedProps.url = undefined;
    }

    if (!linkProps?.url) {
      return (
        <td className={className} colSpan={rest.colSpan}>
          {children}
        </td>
      );
    }

    return (
      <td className={className + " history-clickable"} colSpan={rest.colSpan}>
        <Link
          to={linkProps.url.replace(
            ":id",
            record?.[parsedProps.recordKey] || "undefined"
          )}
        >
          {children}
        </Link>
      </td>
    );
  };

  const parsedColumns = columns.map((col: any) => {
    if (components) {
      return { ...col };
    }

    return {
      ...col,
      onCell: (record: object) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    };
  });

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: object) => {
      setSelectedRows && setSelectedRows(selectedRows);
      setSelectedKeys && setSelectedKeys(selectedRowKeys);
    },
  };

  return (
    <>
      {createUrl && (
        <CustomLink type="primary" htmlType="button">
          <Link to={createUrl}>Yaratish</Link>
        </CustomLink>
      )}
      <AntdTable
        locale={locale}
        columns={parsedColumns}
        dataSource={innerData}
        size={size}
        pagination={
          !disablePagination &&
          localPagination.total > 10 && {
            ...localPagination,
            current: currentPage,
            onChange(pageIdx, _pageSize) {
              setSearchParams({
                ...Object.fromEntries(searchParams),
                pi: String(pageIdx),
              });
              setCurrentPage(() => pageIdx);
            },
          }
        }
        rowClassName={rowClassName}
        onRow={onRow}
        onChange={onChange}
        components={{
          body: {
            cell: EditableCell,
          },
          ...components,
        }}
        showSorterTooltip={false}
        scroll={scroll}
        rowSelection={
          enableSelectedRow ? rowSelectionFunction ?? rowSelection : undefined
        }
      />
    </>
  );
};

const CustomLink = styled(Button)`
  display: flex;
  justify-content: end;
  width: max-content;
  margin-left: auto;
  margin-bottom: 20px;
`;
