import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (document.cookie.split(';').some((item) => item.trim().startsWith('token='))) {
        return <Component {...props} />;
      }
      return <Redirect to="/login" />;
    }}
  />
);

export default ProtectedRoute;
