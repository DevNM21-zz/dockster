import dbFactory from '../db';
import DS from 'nedb-promises';

interface IProject {
  id: string;
  name: string;
  description: string;
  db?: DS;
}

class Project implements IProject {
  id: string;
  name: string;
  description: string;
  db?: DS;

  constructor() {
    this.db = dbFactory('projects.db');
  }

  save(): Promise<IProject> {
    return this.db.insert(this);
  }

  create(project: IProject): Promise<IProject> {
    return this.db.insert(project);
  }

  findAll(): Promise<IProject[]> {
    return this.db.find({});
  }
}

export default new Project();
