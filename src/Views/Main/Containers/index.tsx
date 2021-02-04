import React from 'react';
import docker from '../../../main/handlers/docker';
import ContainerCard from './ContainerCard';

const Containers: React.FC = () => {
  const [containers, setContainers] = React.useState([]);
  React.useEffect(() => {
    docker.containers.getAllContainers().then((res) => {
      setContainers(res);
      console.log(res[0]);
    });
  }, []);
  return (
    <>
      {containers.length > 0
        ? containers.map((c) => (
            <ContainerCard
	            key={c.Id}
              Id={c.Id}
              name={c.Names[0]}
              image={c.Image}
              created={new Date(c.Created * 1000).toLocaleString()}
              state={c.State}
              status={c.Status}
            />
          ))
        : ''}
    </>
  );
};

export default Containers;
