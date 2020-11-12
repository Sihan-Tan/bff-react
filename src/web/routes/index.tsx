import React, { Suspense } from "react";
import { Switch, Route, RouteProps } from "react-router-dom";

import Home from "@pages/home";
import About from "@pages/about";
import User from "@pages/user";
import Hooks from "@pages/hooks";
import Index from "@pages/index";

export const routes: RouteProps[] = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/user",
    exact: true,
    component: User,
  },
  {
    path: "/about",
    exact: true,
    component: About,
  },
  {
    path: "/hooks",
    exact: true,
    component: Hooks,
  },
  {
    path: "/index",
    exact: true,
    component: Index,
  },
];

const Routes = () => (
  <Suspense fallback={<div>12</div>}>
    <Switch>
      {routes.map((route, index) => {
        const { path, component, exact } = route;
        const LazyCom: any = component;
        return (
          <Route
            key={index}
            exact={exact}
            path={path}
            render={(props) => <LazyCom {...props} />}
          />
        );
      })}
    </Switch>
  </Suspense>
);

export default Routes;
