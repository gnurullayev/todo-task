import React, { FC } from "react";
import { filterOption } from "@/utils";
import { DownOutlined } from "@ant-design/icons";
import { Form, Select as AntSelect } from "antd";
import styles from "./Select.module.css";
import { CustomTagProps } from "rc-select/lib/BaseSelect";
import { FormMode } from "@/enums/form-mode";
import { formModeType } from "@/types";
import { ISelectData } from "@/interfaces";
export const arrowStyle = { color: "#000", width: "17px", height: "17px" };

type isList = true | false;

export interface SelectProps {
  placeholder?: string;
  children?: React.ReactNode;
  defaultValue?: string | number | React.ReactText[];
  style?: React.CSSProperties;
  onChange?: any;
  size?: "large" | "middle" | "small";
  mode?: "multiple" | "tags";
  value?: number | string | string[];
  showSearch?: boolean;
  maxTagCount?: number | "responsive";
  allowClear?: boolean;
  loading?: boolean;
  optionLabelProp?: string;
  label?: string;
  name?: (string | number)[] | string | number;
  dropdownRender?: (menu: React.ReactElement) => React.ReactElement;
  tagRender?: (props: CustomTagProps) => React.ReactElement;
  rules?: any;
  initialValue?: string | string[] | number | number[];
  placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight";
  noStyle?: boolean;
  disabled?: boolean;
  formItemClassName?: string;
  variant?: "outlined" | "borderless" | "filled";
  labelInValue?: boolean;
  field?: any;
  list: isList;
  options?: any;
  selectClass?: string;
  className?: string;
  formItemStyle?: React.CSSProperties;
  onSelect?: any;
  suffixIcon?: any;
  onSearch?: any;
  dataSource?: ISelectData[];
  request?: {
    queryKey: string;
    queryFn: (a: any) => Promise<any>;
  };
  customMode?: formModeType;
  filterSort?: any;
}

export const Select: FC<SelectProps> = ({
  field,
  name,
  list = false,
  placeholder = "Tanlang",
  label = "",
  rules = [],
  initialValue,
  noStyle,
  disabled,
  className = "",
  onChange,
  defaultValue,
  style,
  size,
  value,
  mode,
  showSearch = true,
  maxTagCount,
  formItemClassName,
  formItemStyle,
  onSelect,
  suffixIcon,
  onSearch,
  dataSource,
  customMode,
  filterSort,
}) => {
  const itemName = list ? [field.name, name] : name;

  const onPopupScroll = () => {};

  const isView = customMode === FormMode.view;
  const inputClassName = className.concat(" ", isView ? "view" : "");

  return (
    <Form.Item
      name={itemName}
      className={`${styles.form__item} ${formItemClassName}`}
      label={label}
      rules={rules}
      initialValue={initialValue}
      noStyle={noStyle}
      style={formItemStyle}
    >
      <AntSelect
        suffixIcon={
          suffixIcon === null ? null : <DownOutlined style={arrowStyle} />
        }
        onSearch={onSearch}
        placeholder={placeholder}
        optionFilterProp="children"
        filterOption={filterOption}
        filterSort={filterSort}
        options={dataSource ? dataSource : []}
        disabled={isView ? true : disabled}
        className={`${styles.auth_input} ${inputClassName}`}
        getPopupContainer={(triggerNode: HTMLElement) => triggerNode}
        onChange={onChange}
        defaultValue={defaultValue}
        style={style}
        size={size}
        value={value}
        mode={mode}
        showSearch={showSearch}
        maxTagCount={maxTagCount}
        onSelect={onSelect}
        onPopupScroll={onPopupScroll}
      />
    </Form.Item>
  );
};
