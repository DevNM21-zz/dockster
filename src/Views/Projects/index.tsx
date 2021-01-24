import React from 'react';
import Card from 'react-bootstrap/Card';

interface Props {
  name: string;
  description: string;
}
const Index = ({ name, description }: Props): JSX.Element => {
  return (
    <>
      <Card>
        <Card.Header>{name}</Card.Header>
        <Card.Body>{description}</Card.Body>
      </Card>
    </>
  );
};

export default Index;
