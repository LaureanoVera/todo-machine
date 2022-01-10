import React, { createContext, useState } from "react";
import useFilterSearch from "../hooks/useFilterSearch";
import useLocalStorage from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => todo.complete).length; // Complete TODOs length
  const totalTodos = todos.length; // Total TODOs length

  let searchedTodos = useFilterSearch(todos, searchValue); // Update list on changes of searchValue

  const toggleCompleteTodo = (text) => {
    // search index of TODO in todos
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    // create new array with todos
    const newTodos = [...todos];
    // toggle complete value of item with "todoIndex"
    newTodos[todoIndex].complete = !newTodos[todoIndex].complete;
    // set new array of todos
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      complete: false,
      text,
    });
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    // const todoIndex = todos.findIndex((todo) => todo.text === text);
    // const newTodos = [...todos];
    // newTodos.splice(todoIndex, 1);
    // saveTodos(newTodos);
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        toggleCompleteTodo,
        addTodo,
        deleteTodo,
        searchedTodos,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
