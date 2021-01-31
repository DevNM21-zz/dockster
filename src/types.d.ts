interface IProject {
	_id: string;
	name: string;
	description: string;
}

type ProjectState = {
	projects: IProject[];
};

type ProjectAction = {
	type: string;
	id?: string;
	article?: string;
};

type DispatchType = (args: ProjectAction) => ProjectAction;
