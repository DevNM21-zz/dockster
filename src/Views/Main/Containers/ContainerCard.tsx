import React from 'react';
import Card from 'react-bootstrap/Card';

interface Ports {
  privatePort: number;
  publicPort: number;
  type: string;
}

interface Props {
  Id: string;
  name: string;
  image: string;
  created: string;
  state: string;
  status: string;
  ports?: Ports[];
}

const ContainerCard: React.FC<Props> = ({ name, Id, image, created }: Props) => {
  return (
    <Card style={{ marginLeft: '5px' }}>
      <Card.Body>
        <p>
          {name} ({Id}) from {image}
        </p>
        <Card.Footer>
          <p>Created at {created}</p>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ContainerCard;
