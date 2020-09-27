import React from 'react';
import { Router, Switch, RouteProps } from 'react-router-dom';
import { AuthenticatedLayout } from '../layout/AuthenticatedLayout';
import { UnAuthenticatedLayout } from '../layout/UnAuthenticatedLayout';
import appHistory from './history';
import { PrivateRoute } from './private-route';
import { RouteWithLayout } from './route-with-layout';
import { PublicRoute } from './public-route';
import { LoginPage } from '../views/login';
import { HomePage } from '../views/home';
import { NotFoundPage } from '../views/404';

const browserHistory = appHistory

function Routes(): JSX.Element {
  return (
    <Router history={browserHistory}>
      <Switch>
        <PublicRoute path="/login" exact component={LoginPage} layout={UnAuthenticatedLayout} />
        <PrivateRoute path="/home" exact component={HomePage} layout={AuthenticatedLayout} />
        <PublicRoute path="/" exact component={LoginPage} layout={UnAuthenticatedLayout} />
        <RouteWithLayout path="*" component={NotFoundPage} layout={UnAuthenticatedLayout} />
      </Switch>
    </Router>
  )
}

export function redirectTo(pathname: string, props: RouteProps) {
  return {
    pathname,
    state: { from: props.location },
  }
}

export interface RouteInterface {
  component: any
  layout: any
  [propName: string]: any
}

export default Routes
