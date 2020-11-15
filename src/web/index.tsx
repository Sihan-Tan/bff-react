import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import routes from '@routes/index';
import { RecoilRoot } from 'recoil';
import '@assets/styles/index.less';

ReactDOM.render(/* #__PURE__ */React.createElement(RecoilRoot, null, /* #__PURE__ */React.createElement(Router, null, /* #__PURE__ */React.createElement('ul', {
  className: 'nav',
}, /* #__PURE__ */React.createElement('li', null, /* #__PURE__ */React.createElement(Link, {
  to: '/',
}, 'home')), /* #__PURE__ */React.createElement('li', null, /* #__PURE__ */React.createElement(Link, {
  to: '/about',
}, 'about')), /* #__PURE__ */React.createElement('li', null, /* #__PURE__ */React.createElement(Link, {
  to: '/user',
}, 'user')), /* #__PURE__ */React.createElement('li', null, /* #__PURE__ */React.createElement(Link, {
  to: '/hooks',
}, 'hooks')), /* #__PURE__ */React.createElement('li', null, /* #__PURE__ */React.createElement(Link, {
  to: '/index',
}, 'index'))), routes())), document.getElementById('root'));
