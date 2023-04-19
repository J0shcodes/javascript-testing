import React from "react";

const TodoList = (props) => {
  return (
    <ul>
      {props.tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};

export default TodoList;