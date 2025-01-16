import React, { useState } from "react";
import { Menu, MenuProps } from "antd";
import { menuItems } from "@/constants/menu";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuWrapper, SiderWrapper } from "./style";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState(location.pathname);
  const [collapsed, setCollapsed] = useState(false);
  const items: MenuItem[] = menuItems().map((item) =>
    getItem(item.name, item.path)
  );

  const onChange = (e: any) => {
    navigate(e.key);
    setActiveKey(e.key);
  };

  return (
    <SiderWrapper
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="inner">
        <MenuWrapper>
          <span className="title">Todo</span>

          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            defaultSelectedKeys={[activeKey]}
            mode="inline"
            items={items}
            onClick={onChange}
          />
        </MenuWrapper>
      </div>
    </SiderWrapper>
  );
};

export default Sidebar;
