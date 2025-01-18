import { FC, ReactNode } from "react";

import type { LayoutProps } from "antd";
import { Layout as LayoutComponent } from "antd";
import Sidebar from "./Sidebar";

const { Content } = LayoutComponent;

interface Props extends LayoutProps {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <LayoutComponent style={{ minHeight: "100vh" }}>
      <Sidebar />

      <LayoutComponent>
        <Content style={{ margin: "40px 16px" }}>
          <div>{children}</div>
        </Content>
      </LayoutComponent>
    </LayoutComponent>
  );
};

export default Layout;
