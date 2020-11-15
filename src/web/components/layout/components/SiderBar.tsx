import 'antd/es/menu/style';
import _Menu from 'antd/es/menu';
import React from 'react';
import {
  MailOutlined, CalendarOutlined, AppstoreOutlined, SettingOutlined, LinkOutlined,
} from '@ant-design/icons';

const { SubMenu } = _Menu;

const SiderBar = function SiderBar() {
  return /* #__PURE__ */React.createElement(React.Fragment, null, /* #__PURE__ */React.createElement(_Menu, {
    defaultSelectedKeys: ['1'],
    defaultOpenKeys: ['sub1'],
    mode: 'inline',
  }, /* #__PURE__ */React.createElement(_Menu.Item, {
    key: '1',
    icon: /* #__PURE__ */React.createElement(MailOutlined, null),
  }, 'Navigation One'), /* #__PURE__ */React.createElement(_Menu.Item, {
    key: '2',
    icon: /* #__PURE__ */React.createElement(CalendarOutlined, null),
  }, 'Navigation Two'), /* #__PURE__ */React.createElement(SubMenu, {
    key: 'sub1',
    icon: /* #__PURE__ */React.createElement(AppstoreOutlined, null),
    title: 'Navigation Two',
  }, /* #__PURE__ */React.createElement(_Menu.Item, {
    key: '3',
  }, 'Option 3'), /* #__PURE__ */React.createElement(_Menu.Item, {
    key: '4',
  }, 'Option 4'), /* #__PURE__ */React.createElement(SubMenu, {
    key: 'sub1-2',
    title: 'Submenu',
  }, /* #__PURE__ */React.createElement(_Menu.Item, {
    key: '5',
  }, 'Option 5'), /* #__PURE__ */React.createElement(_Menu.Item, {
    key: '6',
  }, 'Option 6'))), /* #__PURE__ */React.createElement(SubMenu, {
    key: 'sub2',
    icon: /* #__PURE__ */React.createElement(SettingOutlined, null),
    title: 'Navigation Three',
  }, /* #__PURE__ */React.createElement(_Menu.Item, {
    key: '7',
  }, 'Option 7'), /* #__PURE__ */React.createElement(_Menu.Item, {
    key: '8',
  }, 'Option 8'), /* #__PURE__ */React.createElement(_Menu.Item, {
    key: '9',
  }, 'Option 9'), /* #__PURE__ */React.createElement(_Menu.Item, {
    key: '10',
  }, 'Option 10')), /* #__PURE__ */React.createElement(_Menu.Item, {
    key: 'link',
    icon: /* #__PURE__ */React.createElement(LinkOutlined, null),
  }, /* #__PURE__ */React.createElement('a', {
    href: 'https://ant.design',
    target: '_blank',
    rel: 'noopener noreferrer',
  }, 'Ant Design \u7231\u8FEA\u751F'))));
};

export default SiderBar;
