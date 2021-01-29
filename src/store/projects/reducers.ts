import { IProjectState, ProjectActionType } from './types';
import { Constants } from './constants';

const init: IProjectState = {
  projects: [],
};

export const projectsReducer = (state: IProjectState = init, action: ProjectActionType): IProjectState => {
  switch (action.type) {
    case Constants.SET_PROJECTS:
      return {
        projects: state.projects.concat(action.payload.projects),
      };
    case Constants.ADD_PROJECT:
      return {
        projects: state.projects.concat(action.payload.project),
      };
    default:
      return state;
  }
};

export default {
  projectsReducer,
};
