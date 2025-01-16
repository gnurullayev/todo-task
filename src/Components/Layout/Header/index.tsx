import { HeaderWrapper } from "./style";
import { Avatar, Dropdown, Menu, theme } from "antd";
import { Link } from "react-router-dom";
import { dispatch } from "@/redux";

function Header() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const Logout = () => {
    dispatch.auth.logoutAsync();
  };

  const menu = (
    <Menu>
      <Link to={"/"}>
        {" "}
        <Menu.Item key="1">Profile</Menu.Item>
      </Link>
      {/* <Menu.Item key="2">2nd menu item</Menu.Item> */}
      <Menu.Item key="2" onClick={Logout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <HeaderWrapper
      style={{
        background: colorBgContainer,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span></span>
      <div className="header-right">
        <div>
          <Dropdown overlay={menu}>
            <Avatar
              style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
              size="large"
              gap={4}
            >
              Alisher
            </Avatar>
          </Dropdown>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
