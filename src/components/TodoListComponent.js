import { Component } from "react";
import { Accordion, Container, Button, Modal, Form, Row, Col, CloseButton, Card, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

class TodoList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            completedList: [],
            isTodoModalOpen: false,
            isDeleteModalOpen: false,
            isAccordionView: true,
            isCompletedListOpen: false,
            mainTask: '',
            description: '',
            todoCount: 0
        }; 

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleListView = this.toggleListView.bind(this);
        this.toggleOffcanvas = this.toggleOffcanvas.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.markAsComplete = this.markAsComplete.bind(this);
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
            id: this.state.todoCount,
            maintask: this.state.mainTask,
            description: this.state.description,
            isDone: false
        }
        this.state.todos.push(todo);
        this.setState({
            todos: this.state.todos,
            mainTask: '',
            description: '',
            todoCount: this.state.todoCount + 1
        });  
    }

    deleteTodo(id) {
        let index = 0;
         for (let i = 0; i < this.state.todos.length; i++) {
            if (this.state.todos[i].id === id) {
                index = i;
                break;
            }
         }
        this.state.todos.splice(index, 1);
        this.setState({
            todos: this.state.todos,
            todoCount: this.state.todoCount - 1
        });
    }

    markAsComplete(id) {
        let index = 0;
         for (let i = 0; i < this.state.todos.length; i++) {
            if (this.state.todos[i].id === id) {
                index = i;
                break;
            }
         }
        const completedItem = this.state.todos.splice(index, 1)[0];
        this.state.completedList.push(completedItem);
        this.setState({
            todos: this.state.todos,
            completedList: this.state.completedList
        });
    }

    toggleModal() {
        this.setState({
            isTodoModalOpen: !this.state.isTodoModalOpen
        });
    }

    toggleOffcanvas() {
        this.setState({
            isCompletedListOpen: !this.state.isCompletedListOpen
        });
    }

    toggleListView() {
        this.setState({
            isAccordionView: !this.state.isAccordionView
        });
    }

    render() {
        const addNewTodoPrompt = (this.state.isAccordionView) ? (
            <Accordion.Item>
            <Accordion.Header>Your to-do list is currently empty. Start adding by clicking the button below:</Accordion.Header>
            </Accordion.Item>
        ) : (
            <Card border="primary">
            <Card.Body>
                <Card.Text>Your to-do list is currently empty. Start adding by clicking the button below:</Card.Text>
            </Card.Body>
            </Card>
        );

        const nothingCompletedMessage = <h4>No to-dos have been completed yet :/</h4>

        const completedList = (!this.state.completedList.length) ? (nothingCompletedMessage) : this.state.completedList.map((item) => {
            if (item) {
                return (
                    <li key={this.state.completedList.length}>{item.maintask}</li>
                );
            } else {
                return <li></li>;
            }
        });

        const toDoList = (!this.state.todos.length) ? (addNewTodoPrompt) : this.state.todos.map((todo) => {
            if (this.state.isAccordionView) {
                return (
                    <Accordion.Item key={todo.id} eventKey={todo.id}>
                        <Accordion.Header>       
                            <Container fluid className="p-0">
                                <Row className="g-0">
                                    <Col xs={11}>
                                        <FontAwesomeIcon onClick={() => this.markAsComplete(todo.id)} icon={faCheckCircle} />&nbsp;
                                        {todo.maintask}  
                                    </Col>
                                    <Col xs={1}>
                                        <CloseButton onClick={() => this.deleteTodo(todo.id)} />
                                    </Col>
                                </Row>
                            </Container>                                   
                        </Accordion.Header>
                        <Accordion.Body>          
                            {todo.description}                        
                        </Accordion.Body>
                    </Accordion.Item>   
                );
            } else {
                return (
                    <Col>
                        <Card border="primary">
                            <Card.Header>
                            <Container fluid className="p-0">
                                <Row className="g-0">
                                    <Col xs={11}>
                                        <FontAwesomeIcon onClick={() => this.markAsComplete(todo.id)} icon={faCheckCircle} />&nbsp;                       
                                    </Col>
                                    <Col xs={1}>
                                        <CloseButton onClick={() => this.deleteTodo(todo.id)} />
                                    </Col>
                                </Row>
                            </Container> 
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    {todo.maintask}  
                                </Card.Title>
                                <Card.Text>
                                    {todo.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            }
        });

        const toDoListWrapped = (this.state.isAccordionView) ? (
            <Accordion className="mb-1">
                {toDoList}
            </Accordion>
        ) : (
            <Row xs={1} md={3} className="mb-1">
                {toDoList}
            </Row>
        );

        const textLabel = (this.state.isAccordionView) ? "Accordion" : "Cards";

        return this.props.isActive && (
            <>
                <Container className="pt-5">
                    <Button variant="secondary" size="sm" className="mb-2" onClick={this.toggleListView}>{textLabel}</Button>
                    <Button variant="success" size="sm" className="mb-2 ms-1" onClick={this.toggleOffcanvas}>COMPLETED</Button>
                    {toDoListWrapped}
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

                <Offcanvas show={this.state.isCompletedListOpen} onHide={this.toggleOffcanvas} placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Completed To-Dos</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <ol>
                        {completedList}
                    </ol>
                    </Offcanvas.Body>
                </Offcanvas>

            </>
        );
    }
}

export default TodoList;