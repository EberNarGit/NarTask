import React from 'react';
import './css/TodoCounter.css';
import { TodoContext } from './todoContext';

function TodoCounter() {
    // Recibmos los valores de react.useContext
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <h1 className="TodoCounter-h1">Bienvenido a <strong className="TodoCounter-h1--strong">N</strong>ar<strong className="TodoCounter-h1--strong">T</strong>ask</h1>
            <h2 className="TodoCounter-h2">Haz completado <strong className="TodoCounter-h2--strong">{completedTodos}</strong> de <strong className="TodoCounter-h2--strong">{totalTodos}</strong> tareas</h2>
        </React.Fragment>
    );
}

export { TodoCounter };