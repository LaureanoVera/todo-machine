import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <div className="row">
      <h4 className="col m8 offset-m2">
        Completed {completedTodos} of {totalTodos} TODOs
      </h4>
    </div>
  );
};

export default TodoCounter;
