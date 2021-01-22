import { app } from 'electron';
import Datastore from 'nedb-promises';
const dbFactory = (fileName: string): Datastore =>
  Datastore.create({
    filename: `${process.env.NODE_ENV === 'dev' ? '.' : app.getPath('appData')}/data/${fileName}`,
    timestampData: true,
    autoload: true,
  });

export default {
  projects: dbFactory('projects.db'),
  images: dbFactory('images.db'),
};
