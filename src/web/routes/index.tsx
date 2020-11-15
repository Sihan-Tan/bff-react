import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '@pages/home';

const About = /* #__PURE__ */React.lazy(() => import('@pages/about'));
const User = /* #__PURE__ */React.lazy(() => import('@pages/user'));
const Hooks = /* #__PURE__ */React.lazy(() => import('@pages/hooks'));
const Index = /* #__PURE__ */React.lazy(() => import('@pages/index'));
export var routes = [{
  path: '/',
  exact: true,
  component: Home,
}, {
  path: '/user',
  exact: true,
  component: User,
}, {
  path: '/about',
  exact: true,
  component: About,
}, {
  path: '/hooks',
  exact: true,
  component: Hooks,
}, {
  path: '/index',
  exact: true,
  component: Index,
}];

const Routes = function Routes() {
  return /* #__PURE__ */React.createElement(Suspense, {
    fallback: /* #__PURE__ */React.createElement('div', null, '12'),
  }, /* #__PURE__ */React.createElement(Switch, null, routes.map((route, index) => {
    const { path } = route;
    const { component } = route;
    const { exact } = route;
    const LazyCom = component;
    return /* #__PURE__ */React.createElement(Route, {
      key: index,
      exact,
      path,
      render: function render(props) {
        return /* #__PURE__ */React.createElement(LazyCom, props);
      },
    });
  })));
};

export default Routes;
