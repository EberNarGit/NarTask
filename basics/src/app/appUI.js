import React from 'react';
import { TodoContext } from "../todoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoButtom } from "../TodoButtom";
import { Modal } from "../modal/modal";
import { TodoForm } from "../TodoForm";
import { TodoEmpty } from '../TodoEmpty';

function AppUI() {
    // Context de react para search y counter
    const {
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
        <TodoList>
          {(!searchedTodos.length) && <TodoEmpty/>}
            {searchedTodos.map(todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
            ))}
          </TodoList>  
      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
      <TodoButtom
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
    );
}

export { AppUI }