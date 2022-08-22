import React from 'react';
import './css/TodoSearch.css';
import { TodoContext } from './todoContext';

function TodoSearch() {
    // Recibmos los valores de react.useContext
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    //Funcion que detecta lo escrito en el input a tiempo real
    const onSearchValueChange = (event) => {setSearchValue(event.target.value);};
    return (
        <form className='formSearch'>
            <input 
            placeholder="Busca una tarea" 
            value={searchValue}
            onChange={onSearchValueChange}
            />
            <span></span>
        </form>
    );
}

export { TodoSearch };
