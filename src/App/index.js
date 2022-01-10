import React from "react";
import { TodoProvider } from "../TodoContext";
import "./App.css";
import AppUI from "./AppUI";

// const defaultTodos = [
//   { text: "Cazar un Oso", complete: false },
//   { text: "Prensa 200kg", complete: false },
//   { text: "Correr 100km", complete: false },
//   { text: "Practicar Ingles", complete: false },
//   { text: "Programar", complete: false },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
