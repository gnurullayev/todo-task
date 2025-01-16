import { FC, ReactNode } from "react";

import type { LayoutProps } from "antd";
import { Layout as LayoutComponent } from "antd";
import Sidebar from "./Sidebar";
import Header from "./Header";

const { Content } = LayoutComponent;

interface Props extends LayoutProps {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <LayoutComponent style={{ minHeight: "100vh" }}>
      <Sidebar />

      <LayoutComponent>
        <Header />
        <Content style={{ margin: "0 16px" }}>
          <div>{children}</div>
        </Content>
      </LayoutComponent>
    </LayoutComponent>
  );
};

export default Layout;
