import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoItem from "../components/TodoItem";
import DetailItem from "../components/DetailItem";
import ModalForm from "../components/ModalForm";

const Landing = () => {
  const [todos, setTodos] = useState([]);
  const [activeTodo, setActiveTodo] = useState({});

  const [detailItem, setDetailItem] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await axios.get(
          "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list?sort_by=asc(title)"
        );

        setTodos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  }, []);

  const handleClick = (todo) => {
    setActiveTodo(todo);
    setDetailItem(true);
  };

  const handleDelete = (todo) => {
    let newTodos = todos.filter((item) => item != todo);
    setTodos(newTodos);

    setDetailItem(false);
  };

  const handleUpdate = (todo) => {
    const elementsIndex = todos.findIndex((item) => item.id == todo.id);

    let newTodos = [...todos];
    newTodos[elementsIndex] = todo;

    setTodos(newTodos);
  };

  const handleInsert = (todo) => {
    let newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>To Do Application</h1>
      <button
        className="btn btn-success btn-block"
        onClick={() => setShowForm(true)}
      >
        Add
      </button>

      <div className="my-4 border p-2">
        <h2>Unfinished Todo List</h2>
        <small>
          <i>(ascending)</i>
        </small>
        <TodoItem todos={todos} status={0} showModal={handleClick} />
      </div>

      <div className="my-4 border p-2">
        <h2>Finished Todo List </h2>
        <small>
          <i>(descending)</i>
        </small>
        <TodoItem todos={todos} status={1} showModal={handleClick} />
      </div>

      <DetailItem
        show={detailItem}
        onHide={() => setDetailItem(false)}
        todo={activeTodo}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />

      <ModalForm
        show={showForm}
        onHide={() => setShowForm(false)}
        handleUpdate={handleInsert}
        handleHide={() => setShowForm(false)}
      />
    </div>
  );
};

export default Landing;
