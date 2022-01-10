import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState("");

  const { addTodo, setOpenModal } = useContext(TodoContext);

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleChange = (evt) => {
    const { value } = evt.target;
    setNewTodoValue(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="input-field col s12">
          <textarea
            id="textarea1"
            onChange={handleChange}
            className="materialize-textarea"
          ></textarea>
          <label htmlFor="textarea1">Write your TODO</label>
        </div>
      </div>
      <div className="row">
        <button
          type="button"
          onClick={handleCancel}
          className="waves-effect waves-light btn-small col s5"
        >
          Cancel
        </button>
        <button
          className="btn-small waves-effect waves-light col s5 offset-s2"
          type="submit"
          name="action"
        >
          Add
          <i className="material-icons right">send</i>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
