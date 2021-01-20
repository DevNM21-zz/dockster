import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import AddProjectModal from './AddProjectModal';

const Index = (): JSX.Element => {
  const [showAddProjectModal, setAddProjectModalStatus] = useState(false);
  const toggleModal = (): void => setAddProjectModalStatus(!showAddProjectModal);

  return (
    <>
      <Container style={{ paddingTop: '40%' }} className={'justify-content-center text-center'}>
        <h4>It looks so empty!</h4>
        <p>Let&apos;s start by adding a project.</p>
        <Button onClick={toggleModal} variant={'dark'}>
          Add Project +
        </Button>
      </Container>
      <AddProjectModal show={showAddProjectModal} toggle={toggleModal} />
    </>
  );
};

export default Index;
