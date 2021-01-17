import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Index = () => {
  return (
    <>
      <Container style={{ paddingTop: '40%' }} className={'justify-content-center text-center'}>
        <h4>It looks so empty!</h4>
        <p>Let&apos;s start by adding a project.</p>
        <Button variant={'dark'}>Add Project +</Button>
      </Container>
    </>
  );
};

export default Index;
