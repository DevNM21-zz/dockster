import { hot } from 'react-hot-loader';
import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AppLayout from './AppLayout';
import DefaultView from './Views/Default';
import { ipcRenderer } from 'electron';
import { useDispatch } from 'react-redux';
import { setProjects } from './store/projects/actions'

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    ipcRenderer.invoke('getAllProjects', {}).then((projects: any) => {
      dispatch(setProjects(projects));
    });
  }, []);
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
