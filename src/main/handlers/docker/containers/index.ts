import docker from '../client';

export default {
  getAllContainers: () => {
    return docker.listContainers({ all: true });
  },
};
