import React from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import docker from '../../../main/handlers/docker';
import ImageCard from './ImageCard';

const Images: React.FC = () => {
  const [images, setImages] = React.useState([]);
  React.useEffect(() => {
    docker.images.getExistingImages().then((res) => {
      setImages(res);
    });
  }, []);
  return (
    <>
      <h1>Your Images</h1>
      <Container>
        <Row>
          {images.length > 0 ? (
            images.map((img) => (
              <Col md={'4'}>
                <ImageCard
                  key={img.Id}
                  name={img.RepoTags[0].split(':')[0]}
                  tags={img.RepoTags.map((r: string) => r.split(':')[1])}
                  containers={img.Containers}
                />
              </Col>
            ))
          ) : (
            <Spinner animation={'border'} />
          )}
        </Row>
      </Container>
    </>
  );
};

export default Images;
