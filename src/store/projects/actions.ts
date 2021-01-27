import { action } from 'typesafe-actions';
import { Constants } from './constants';
import { IProject } from './types';

export function setProjects(projects: IProject[]) {
  return action(Constants.SET_PROJECTS, {
    projects,
  });
}
