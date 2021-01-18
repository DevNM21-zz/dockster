import React, { useState } from 'react';
import Modal from '../../Components/Modal';

interface props {
  show: boolean;
  toggle: () => void;
}

const AddProjectModal = ({ show, toggle }: props): JSX.Element => {
  return (
    <div>
      <Modal title={'Add your Project'} toggleModal={toggle} show={show}>
        <h1>Add a project</h1>
      </Modal>
    </div>
  );
};

export default AddProjectModal;
