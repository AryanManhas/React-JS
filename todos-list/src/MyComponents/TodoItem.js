import React from "react";

const TodoItem = ({todo , onDelete}) => {
  return (
    <div>
      <h4>{todo.todo.title}</h4>
      <p>{todo.todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
