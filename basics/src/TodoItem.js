import react from "react";
import './css/TodoItem.css';

function TodoItem(props){

    return(
        
        <li className="TodoItem">
            <span 
            className={`status ${props.completed && 'status-active'}`}
            onClick={props.onComplete}
            ></span>
            
            <p className={`description ${props.completed && 'description-active'}`}>{props.text}</p>
            
            <span
            className="delete"
            onClick={props.onDelete}
            ></span>
        </li>
    );
}

export { TodoItem };