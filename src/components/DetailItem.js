import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import FormEdit from "./FormEdit";

const DetailItem = ({ show, onHide, todo, handleDelete, handleUpdate }) => {
  const [activeTodo, setActiveTodo] = useState({});
  const [showForm, setShowForm] = useState(false);

  const handleHide = () => {
    setShowForm(false);
    onHide();
  };

  return (
    <Modal show={show} onHide={handleHide} centered>
      <Modal.Header>
        <Modal.Title className="font-weight-bolder">{todo.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p>{todo.description}</p>
          <p>Created At: {todo.createdAt}</p>
          <p>Status: {todo.status ? "Done" : "Not Yet"}</p>
        </div>

        <button
          className="btn btn-warning btn-block"
          onClick={() => {
            setActiveTodo(todo);
            setShowForm(true);
          }}
        >
          Edit
        </button>

        {todo.status != 1 && (
          <button
            className="btn btn-danger btn-block"
            onClick={() => handleDelete(todo)}
          >
            Delete
          </button>
        )}

        <hr />

        {showForm && (
          <FormEdit
            todo={activeTodo}
            handleUpdate={handleUpdate}
            handleHide={handleHide}
          />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default DetailItem;
