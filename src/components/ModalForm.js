import React from "react";
import { Modal } from "react-bootstrap";
import FormEdit from "./FormEdit";

const ModalForm = ({ show, handleUpdate, handleHide }) => {
  return (
    <Modal show={show} onHide={handleHide} centered>
      <Modal.Header>
        <Modal.Title className="font-weight-bolder">To Do Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormEdit
          todo={{}}
          handleUpdate={handleUpdate}
          handleHide={handleHide}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalForm;
