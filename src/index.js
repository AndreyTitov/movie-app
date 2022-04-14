import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider as MobxProvider } from 'mobx-react';
import stores from './stores/stores';
import { ThemeProvider } from 'styled-components';
import themes from './themes';
import GlobalStyles from './globalStyles/globalStyles';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={themes.default}>
    <MobxProvider {...stores}>
      <GlobalStyles/>
      <App/>
    </MobxProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
