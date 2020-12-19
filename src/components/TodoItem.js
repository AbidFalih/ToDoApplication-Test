import React from "react";

const TodoItem = ({ todos, status, showModal }) => {
  if (status) {
    todos.sort(compareDesc);
  } else {
    todos.sort(compareAsc);
  }

  return (
    <>
      {todos.map(
        (todo) =>
          todo.status == status && (
            <button
              className="btn-block"
              key={todo.id}
              onClick={() => showModal(todo)}
            >
              {todo.title}{" "}
              <small>
                <i>({todo.createdAt})</i>
              </small>
            </button>
          )
      )}
    </>
  );
};

const compareAsc = (a, b) => {
  if (a.createdAt < b.createdAt) return -1;
  else if (a.createdAt > b.createdAt) return 1;
  else return 0;
};

const compareDesc = (a, b) => {
  if (a.createdAt < b.createdAt) return 1;
  else if (a.createdAt > b.createdAt) return -1;
  else return 0;
};

export default TodoItem;
