import { Component } from "react";
import { Accordion, Container, Button, Modal, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

class TodoList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            isTodoModalOpen: false,
            isDeleteModalOpen: false,
            mainTask: '',
            description: ''
        }; 

        this.toggleModal = this.toggleModal.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }

    addTodo(event) {
        event.preventDefault();
        const todo = {
            id: this.state.todos.length,
            maintask: this.state.mainTask,
            description: this.state.description
        }
        this.state.todos.push(todo);
        this.setState({
            todos: this.state.todos,
            mainTask: '',
            description: ''
        });  
    }

    deleteTodo(id) {
        this.state.todos.splice(id, 1);
        this.setState({
            todos: this.state.todos
        });
    }

    toggleModal() {
        this.setState({
            isTodoModalOpen: !this.state.isTodoModalOpen
        });
    }

    render() {
        const addNewTodoPrompt = (
            <Accordion.Item>
            <Accordion.Header>Your to-do list is currently empty. Start adding by clicking the button below:</Accordion.Header>
            </Accordion.Item>
        );

        const toDoList = (!this.state.todos.length) ? (addNewTodoPrompt) : this.state.todos.map((todo) => {
            return (
                <Accordion.Item key={todo.id} eventKey={todo.id}>
                    <Accordion.Header><span onClick={() => this.deleteTodo(todo.id)}><FontAwesomeIcon icon={faTimes}/>&nbsp;</span>{todo.maintask}</Accordion.Header>
                    <Accordion.Body>          
                        {todo.description}                        
                    </Accordion.Body>
                </Accordion.Item>   
            );
        })

        return (
            <>
                <Container className="pt-5">
                    <Accordion>
                        {toDoList}
                    </Accordion>
                    <Button variant="danger" className="p-1 mt-1" onClick={this.toggleModal}><FontAwesomeIcon icon={faPlus} />&nbsp;ADD</Button>
                </Container>


                <Modal show={this.state.isTodoModalOpen} onHide={this.toggleModal} >
                    <Modal.Header closeButton>
                    <Modal.Title>ADD TODO</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.addTodo}>
                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="mainTask">
                                <Form.Label>TO-DO:</Form.Label>
                                <Form.Control name="mainTask" type="text" value={this.state.mainTask} onChange={this.handleChange} placeholder="Enter the main task here" />
                            </Form.Group>        
                            <Form.Group className="mb-3" controlId="subTask">
                                <Container>
                                    <Row>
                                        <Form.Label>Description: [OPTIONAL]</Form.Label>
                                    </Row>
                                    <Row>                      
                                        <Form.Control name="description" as="textarea" rows={6}  
                                        value={this.state.description} onChange={this.handleChange} placeholder="Add description here" />                                       
                                    </Row>
                                </Container>                                                              
                            </Form.Group>  
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.toggleModal}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit" onClick={this.toggleModal}>
                            Save 
                        </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>

            </>
        );
    }
}

export default TodoList;