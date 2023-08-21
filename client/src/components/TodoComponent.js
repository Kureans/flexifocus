import { Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Todo(props) {

    return (
        <Accordion.Item eventKey={props.todo.id}>
            <Accordion.Header><span onClick={() => console.log(props.todo.id)}><FontAwesomeIcon icon={faTimes}/>&nbsp;</span>{props.todo.maintask}</Accordion.Header>
            <Accordion.Body>          
                {props.todo.description}                        
            </Accordion.Body>
        </Accordion.Item>
    );
}

export default Todo;