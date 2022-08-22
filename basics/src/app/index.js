import '../css/App.css';
import React from "react";
import { TodoProvider } from "../todoContext";
import { AppUI } from './appUI';

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
