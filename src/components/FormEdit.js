import React from "react";
import { useState } from "react";

const FormEdit = ({ todo, handleUpdate, handleHide }) => {
  const [formData, setFormData] = useState({
    id: todo.id,
    title: todo.title,
    description: todo.description,
    status: todo.status,
    createdAt: todo.createdAt,
  });

  const { title, description, status, createdAt } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    handleUpdate(formData);
    handleHide();

    console.log("Form Data", formData);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => {
            setFormData({ ...formData, title: e.target.value });
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => {
            setFormData({ ...formData, description: e.target.value });
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="status" className="form-label">
          Status{" "}
          <small>
            <i>(not yet = unfinished, have done = finished)</i>
          </small>
        </label>
        <select
          className="custom-select my-2"
          value={status}
          onChange={(e) => {
            setFormData({ ...formData, status: e.target.value });
          }}
        >
          <option value="" disable selected hidden>
            select status..
          </option>
          <option value="0">Not Yet</option>
          <option value="1">Have Done</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="createdAt" className="form-label">
          Created At
        </label>
        <input
          type="text"
          className="form-control"
          value={createdAt}
          onChange={(e) => {
            setFormData({ ...formData, createdAt: e.target.value });
          }}
        />
      </div>

      <button type="submit" className="btn btn-block btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormEdit;
