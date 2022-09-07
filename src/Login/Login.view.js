/**
 * @file Contains Login component.
 */

import React, { useEffect } from 'react';
import { LoginWrapper } from './Login.view.style';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    loginWithRedirect();
  }, []);

  return (
    <LoginWrapper>
      Login
    </LoginWrapper>
  )
};

export default Login;
