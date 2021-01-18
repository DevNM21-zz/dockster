import React, { ReactChild, ReactFragment, ReactPortal } from 'react';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import Modal from 'react-bootstrap/Modal';
import CloseButton from 'react-bootstrap/CloseButton';

interface props {
  title: string;
  children: ReactChild | ReactFragment | ReactPortal | null;
  toggleModal: () => void;
  show: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

const CustomModal = ({ title, show, children, toggleModal, onOpen, onClose }: props): JSX.Element => {
  return (
    <div>
      <Modal show={show} onOpen={onOpen} onExited={onClose}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={toggleModal} />
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </Modal>
    </div>
  );
};

export default CustomModal;
