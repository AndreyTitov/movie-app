import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider as MobxProvider } from 'mobx-react';
import stores from './stores/stores';
import { ThemeProvider } from 'styled-components';
import themes from './themes';
import GlobalStyles from './globalStyles/globalStyles';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain="dev-4mu262ce.us.auth0.com"
    clientId="E8JpbYLDCZV5rq29LMbj0mkwmZHnmIBI"
    redirectUri={'https://wallet.armenotech.dev/'}
  >
    <ThemeProvider theme={themes.default}>
      <MobxProvider {...stores}>
        <GlobalStyles/>
        <App/>
      </MobxProvider>
    </ThemeProvider>
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
