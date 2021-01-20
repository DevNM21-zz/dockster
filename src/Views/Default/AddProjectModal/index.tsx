import React, { useState } from 'react';
import Modal from '../../../Components/Modal';
import Form from './Form';

interface props {
  show: boolean;
  toggle: () => void;
}

const Index = ({ show, toggle }: props): JSX.Element => {
  return (
    <div>
      <Modal title={'Add your Project'} toggleModal={toggle} show={show}>
        <Form />
      </Modal>
    </div>
  );
};

export default Index;
