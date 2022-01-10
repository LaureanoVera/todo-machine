import React, { useContext } from "react";
import TodoSearch from "../components/TodoSearch";
import TodoCounter from "../components/TodoCounter";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import CreateTodoButton from "../components/CreateTodoButton";
import { TodoContext } from "../TodoContext";
import Modal from "../components/Modal";
import TodoForm from "../components/TodoForm";

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <div className="container">
      <TodoCounter />
      <TodoSearch />
      {/* <TodoContext.Consumer> */}
      {/* {() => ( */}
      <TodoList>
        {error && <p>Error Ocurred...</p>}
        {loading && (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        )}
        {!loading && !searchedTodos.length && <p>Create your TODO!</p>}

        {searchedTodos.map((todo) => {
          // Render <TodoItem /> Component for each TODO
          return (
            <TodoItem
              data={todo}
              toggleCompleteTodo={() => toggleCompleteTodo(todo.text)}
              deleteTodo={() => deleteTodo(todo.text)}
              key={todo.text}
            />
          );
        })}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      {/* ); */}
      {/* </TodoContext.Consumer> */}
      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default AppUI;
