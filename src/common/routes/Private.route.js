/**
 * @file Contains Private route component.
 */

import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;
  const { isAuthenticated, isLoading } = useAuth0();

  /**
   * Is authenticated flag.
   */
  const [authenticated, setAuthenticated] = useState(false);

  /**
   * Set is user authenticated.
   */
  useEffect(() => {
    setAuthenticated(isAuthenticated);
  }, [isAuthenticated]);

  /**
   * Render component.
   * @param {object} properties.
   * Component props.
   */
  const renderComponent = (properties) => {
      if (authenticated) {
        return <Component {...properties} />;
      }
      return <Redirect to={'/login'} />;
  };

  if (authenticated) {
    return <>{isLoading ? <div>Loading</div> : <Route exact {...rest} render={renderComponent} />}</>;
  }

  return <Redirect to={'/login'} />;
};

export default PrivateRoute;
