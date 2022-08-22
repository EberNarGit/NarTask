import react from "react";
import './css/TodoButtom.css';

function TodoButtom(props) {
    // funcion que detecta los clic's
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };
    return(
        <span 

        className="TodoButtom"
        onClick={onClickButton}
        >
        </span>
    );
}

export { TodoButtom };