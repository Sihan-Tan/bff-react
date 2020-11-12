import React, { FC } from "react";
import { Layout } from "antd";
import SiderBar from "./components/SiderBar";
import BreadCrumb from "./components/BreadCrumb";

const { Header, Footer, Sider, Content } = Layout;

const Index: FC = () => {
  return (
    <Layout>
      <Sider>
        <SiderBar />
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: "skyblue" }}>
          <BreadCrumb />
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default Index;
