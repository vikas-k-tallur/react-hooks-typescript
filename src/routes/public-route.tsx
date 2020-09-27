import React from 'react';
import { Route } from 'react-router-dom';
import { RouteInterface } from './router';

export const PublicRoute = ({ layout: Layout, component: Component, ...rest }: RouteInterface) => (
  <Route
    {...rest}
    render={props =>
      <Layout>
        <Component {...props} />
      </Layout>
    }
  />
)
