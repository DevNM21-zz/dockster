import { combineReducers, createStore } from 'redux';
import { projectsReducer } from './projects/reducers';
import { IProjectState } from './projects/types';

export interface IRootState {
  projects: IProjectState;
}
const store = createStore(
  combineReducers({
    projects: projectsReducer,
  }),
);
export  default store;