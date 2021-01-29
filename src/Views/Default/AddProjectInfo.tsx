import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import AddProjectModal from './AddProjectModal';

const AddProjectInfo: React.FC = () => {
  const [showAddProjectModal, setAddProjectModalStatus] = useState(false);
  const toggleModal = (): void => setAddProjectModalStatus(!showAddProjectModal);
  return (
    <>
      <Container style={{ paddingTop: '24%' }} className={'justify-content-center text-center'}>
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

export default AddProjectInfo;
