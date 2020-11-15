import 'antd/es/layout/style';
import _Layout from 'antd/es/layout';
import React from 'react';
import SiderBar from './components/SiderBar';
import BreadCrumb from './components/BreadCrumb';

const { Header } = _Layout;
const { Footer } = _Layout;
const { Sider } = _Layout;
const { Content } = _Layout;

const Index = function Index() {
  return /* #__PURE__ */React.createElement(_Layout, null, /* #__PURE__ */React.createElement(Sider, null, /* #__PURE__ */React.createElement(SiderBar, null)), /* #__PURE__ */React.createElement(_Layout, null, /* #__PURE__ */React.createElement(Header, {
    style: {
      backgroundColor: 'skyblue',
    },
  }, /* #__PURE__ */React.createElement(BreadCrumb, null)), /* #__PURE__ */React.createElement(Content, null, 'Content'), /* #__PURE__ */React.createElement(Footer, null, 'Footer')));
};

export default Index;
