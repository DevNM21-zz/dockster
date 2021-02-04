import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { ipcRenderer } from 'electron';
import docker from '../../../main/handlers/docker';

const Images: React.FC = () => {
  const [images, setImages] = React.useState([]);
  React.useEffect(() => {
    docker.images.getExistingImages().then((res) => setImages(res));
  }, []);
  return (
    <>
      <h1>Your Images</h1>
      <Container>
        {images.length > 0 ? images.map((img) => <Card>{img.RepoTags[0]}</Card>) : <Spinner animation={'border'} />}
      </Container>
    </>
  );
};

export default Images;
