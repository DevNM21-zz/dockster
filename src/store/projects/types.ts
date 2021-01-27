export interface IProject {
  id: string;
  name: string;
  description: string;
}

interface Payload {
	id?: string;
	project?: IProject;
	projects?: IProject[];
}

export type ProjectActionType = {
  type: string;
	payload: Payload
};

export type ProjectDispatchType = (args: ProjectAction) => ProjectAction;

export interface IProjectState {
  projects: IProject[];
}
