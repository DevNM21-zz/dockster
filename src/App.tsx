import { hot } from 'react-hot-loader';
import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AppLayout from './AppLayout';
import DefaultView from './Views/Default';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <HashRouter>
          <AppLayout>
            <Switch>
              <Route path={'/'} exact>
                <DefaultView />
              </Route>
            </Switch>
          </AppLayout>
        </HashRouter>
      </Provider>
    </>
  );
};

export default hot(module)(App);
