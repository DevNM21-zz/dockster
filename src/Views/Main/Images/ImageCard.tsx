import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

interface Props {
  name: string;
  tags: string[];
  containers: number;
}

const ImageCard: React.FC<Props> = ({ name, tags, containers }: Props) => {
  return (
    <Card style={{ marginBottom: '5px' }}>
      <Card.Header>
        {name}
        {tags.map((tag) => (
          <Badge style={{ marginLeft: '5px' }} pill={true} variant={'info'} >{tag}</Badge>
        ))}
      </Card.Header>
      <Card.Body>
        <p>Containers: {containers}</p>
        <Button>
          Quick Launch a Container
        </Button>
      </Card.Body>
      
    </Card>
  );
};

export default ImageCard;
