import React from "react";
import { useLocalStorage } from '../hooks/localStorage';

// Herramienta de react que permite crear context
const TodoContext = React.createContext();


function TodoProvider(props) {

    // const initialTask = [
    //     {text: 'Soy texto de relleno para ver como se ve la tarjeta, seguire escribiendo para ver que tal se ve', completed: true},
    //     {text: 'Cebollas', completed: false},
    //     {text: 'las cosas vuelan', completed: false},
    //     {text: 'los sueños se olvidan', completed: false},
    //     {text: 'la lluvia no aparece', completed: false}, 
    //   ];
    // Iniciacion de la funcion lacalStorage
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
    
    //Funcion para leer y modificar el estado
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    
    // Funcion que cuenta las tareas que se han completado
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    
    // Variable donde se guarda el total de las tareas
    const totalTodos = todos.length;

    // funcion para reducir los todos en base a la busqueda
    let searchedTodos = [];
    if (!searchValue.length >= 1) {searchedTodos= todos}
    else{
        searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLowerCase()
        return todoText.includes(searchText);
        });
    }

    // Funcion para añadir nuevas tareas
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({text, completed: false,});
        saveTodos(newTodos);
    }

    // Funcion para detectar las tareas completadas
    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    // Funcion para eliminar las tareas
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }
    return (
        // Envuelve a toda nuesta aplicacion
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }
// <TodoContext.Consumer></TodoContext.Consumer>
