import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Input, Switch } from "antd";
import type { MenuProps } from "antd";
import { SearchOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
const { Header } = Layout;
const HeaderComponent: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = (checked: boolean) => {
    setDarkMode(checked);
  };

  const backgroundColor = darkMode ? "#000000" : "#FFFFFF";
  const color = darkMode ? "#FFFFFF" : "#000000";
  const currentPage = window.location.href.slice(22);
  const [current, setCurrent] = useState(currentPage);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      key: "home",
      label: <Link to="/home">Home</Link>,
    },
    {
      key: "newpost",
      label: <Link to="/newpost">Blog</Link>,
    },
    {
      key: "post",
      label: <Link to="/post">Single blog</Link>,
    },
    {
      key: "pages",
      label: <Link to="/pages">Page</Link>,
    },
    {
      key: "content",
      label: "Content",
    },
  ];

  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor,
          color,
        }}
      >
      
        <div
          className="demo-logo"
          style={{ display: "flex", alignItems: "center" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5em"
            height="2.5em"
            viewBox="0 0 256 256"
          >
            <circle cx="128" cy="128" r="128" fill="#ffe121" />
            <path d="M122.4 60.8v86.4c-24 0-43.2-19.2-43.2-43.2c0-24 19.2-43.2 43.2-43.2m11.2 134.4v-86.4c24 0 43.2 19.2 43.2 43.2c0 23.613-18.586 42.58-42.043 43.185zM154 60.8c11.2 0 20.4 9.2 20.4 20.4s-9.2 20.4-20.4 20.4s-20.4-9.2-20.4-20.4s9.2-20.4 20.4-20.4m-52 93.6c11.2 0 20.4 9.2 20.4 20.4s-9.2 20.4-20.4 20.4s-20.4-9.2-20.4-20.4s9.2-20.4 20.4-20.4" />
          </svg>
          <span style={{ paddingLeft: 20 }}>
            <strong>Sblog</strong>
          </span>
        </div>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          style={{
            flex: 1,
            minWidth: 0,
            justifyContent: "center",
            backgroundColor,
            color,
          }}
          items={items}
        ></Menu>

        <div style={{ padding: 20, display: "flex", alignItems: "center" }}>
          <Input prefix={<SearchOutlined />} style={{ marginRight: 10 }} />
          <Switch
            checked={darkMode}
            onChange={handleDarkModeToggle}
            checkedChildren={<SunOutlined style={{ color: "#FFEB3B" }} />}
            unCheckedChildren={<MoonOutlined />}
          />
        </div>
      </Header>
    </>
  );
};
export default HeaderComponent;
