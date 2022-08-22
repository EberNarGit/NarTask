import React from "react";
import { TodoContext } from "./todoContext";
import "./css/TodoForm.css";

function TodoForm() {
    const [newTodoValue, setNewTodoValues] = React.useState('');
    const {addTodo, setOpenModal,} = React.useContext(TodoContext);
    const onCancel = () => {
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValues(event.target.value);
    };
    const onSave = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    return(
        <form className="todoform" onSubmit={onSave}>
            <textarea 
            className="todotextarea"
            value={newTodoValue}
            onChange={onChange}
            placeholder="Hola ¿Cual es tu nueva tarea?"
            />

            <div className="buttonsection">
                <button className="cancel" onClick={onCancel} type="button">Cancelar</button>
                <button className="save" type="submit">Guardar</button>
            </div>
        </form>
    );
}

export { TodoForm };