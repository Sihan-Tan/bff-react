import 'antd/es/carousel/style';
import _Carousel from 'antd/es/carousel';
import 'antd/es/avatar/style';
import _Avatar from 'antd/es/avatar';
import 'antd/es/menu/style';
import _Menu from 'antd/es/menu';
import 'antd/es/modal/style';
import _Modal from 'antd/es/modal';
import 'antd/es/layout/style';
import _Layout from 'antd/es/layout';

import React, { useState } from 'react';
import '@assets/styles/about.less';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr))) return; const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return != null) _i.return(); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
const { Header } = _Layout;
const { Content } = _Layout;

const LoginModal = function LoginModal(_ref) {
  const { show } = _ref;
  return /* #__PURE__ */React.createElement(_Modal, {
    title: 'Basic Modal',
    visible: show,
  }, /* #__PURE__ */React.createElement('p', null, 'Some contents...'), /* #__PURE__ */React.createElement('p', null, 'Some contents...'), /* #__PURE__ */React.createElement('p', null, 'Some contents...'));
};

const About = function About() {
  const _useState = useState(false);
  const _useState2 = _slicedToArray(_useState, 2);
  const showModal = _useState2[0];
  const setShowModal = _useState2[1];

  const changeModalState = function changeModalState() {
    setShowModal(!showModal);
  };

  return /* #__PURE__ */React.createElement(React.Fragment, null, /* #__PURE__ */React.createElement(LoginModal, {
    show: showModal,
  }), /* #__PURE__ */React.createElement(_Layout, null, /* #__PURE__ */React.createElement(Header, null, /* #__PURE__ */React.createElement('div', {
    className: 'head-box',
  }, /* #__PURE__ */React.createElement('div', {
    className: 'left',
  }, 'logo'), /* #__PURE__ */React.createElement('div', {
    className: 'center',
  }, /* #__PURE__ */React.createElement(_Menu, {
    mode: 'horizontal',
  }, /* #__PURE__ */React.createElement(_Menu.Item, {
    key: 'mail',
  }, 'Navigation One'), /* #__PURE__ */React.createElement(_Menu.Item, {
    key: 'app',
  }, 'Navigation Two'), /* #__PURE__ */React.createElement(_Menu.Item, {
    key: 'alipay',
  }, /* #__PURE__ */React.createElement('a', {
    href: 'https://ant.design',
    target: '_blank',
    rel: 'noopener noreferrer',
  }, 'Navigation Four - Link')))), /* #__PURE__ */React.createElement('div', {
    className: 'right',
  }, /* #__PURE__ */React.createElement(_Avatar, {
    size: 40,
  }, 'USER'), /* #__PURE__ */React.createElement(_Avatar, {
    size: 40,
    src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  }), 'icon'))), /* #__PURE__ */React.createElement(Content, null, /* #__PURE__ */React.createElement(_Carousel, {
    autoplay: true,
  }, /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement('h3', null, '2')), /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement('h3', null, '2')), /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement('h3', null, '2')), /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement('h3', null, '2'))), ',')));
};

export default About;
