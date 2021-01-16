import { hot } from 'react-hot-loader';
import * as React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import AppLayout from './AppLayout';
import DefaultView from './Views/Default';

const App = () => {
  return (
    <>
    <HashRouter>
    <AppLayout>
        <Switch>
          <Route path={'/'} exact>
            <DefaultView/>
          </Route>
        </Switch>
    </AppLayout>
    </HashRouter>
    </>
  );
};

export default hot(module)(App);
