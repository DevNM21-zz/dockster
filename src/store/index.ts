import { combineReducers, createStore } from 'redux';
import { projectsReducer } from './projects/reducers';
import { IProjectState } from './projects/types';
import { composeWithDevTools } from 'redux-devtools-extension';
export interface IRootState {
  projects: IProjectState;
}
const store = createStore(
  combineReducers({
    projects: projectsReducer,
  }),
  {},
  composeWithDevTools(),
);
export  default store;