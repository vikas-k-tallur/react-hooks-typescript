import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { redirectTo, RouteInterface } from './router'
import AuthContext from '../context/auth/authContext';

export const PrivateRoute = ({ layout: Layout, component: Component, ...rest }: RouteInterface) => {
  const authContext = useContext(AuthContext);
  const { state: { isAuthenticated } } = authContext;
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to={redirectTo('/login', props)} />
        )
      }
    />
  );
}
