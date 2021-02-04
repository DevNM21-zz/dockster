import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import docker from '../../../main/handlers/docker';
import ImageCard from './ImageCard';

const Images: React.FC = () => {
  const [images, setImages] = React.useState([]);
  React.useEffect(() => {
    docker.images.getExistingImages().then((res) => {
      console.log(res)
      setImages(res)
    });
  }, []);
  return (
    <>
      <h1>Your Images</h1>
      <Container>
        {images.length > 0 ? (
          images.map((img) => (
            <ImageCard
              name={img.RepoTags[0].split(':')[0]}
              tags={img.RepoTags.map((r: string) => r.split(':')[1])}
              containers={img.Containers}
            />
          ))
        ) : (
          <Spinner animation={'border'} />
        )}
      </Container>
    </>
  );
};

export default Images;
