import { Component } from 'react';
import Timer from './TimerComponent';
import TodoList from './TodoListComponent';
import Music from './MusicComponent';
import { Container, Row, Col } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showTimer: true,
            showTodoList: false,
            showMusic: false
        };

        this.toggleView = this.toggleView.bind(this);
    }

    toggleView(num) {
        switch (num) {
            default:
            case 1:
                this.setState({
                    showTimer: true,
                    showTodoList: false,
                    showMusic: false
                });
                break;
            case 2:
                this.setState({
                    showTimer: false,
                    showTodoList: true,
                    showMusic: false
                });
                break;
            case 3:
                this.setState({
                    showTimer: false,
                    showTodoList: false,
                    showMusic: true
                });  
                break;
        }
    }

    render() {
        // const { showTimer, showTodoList, showMusic, showScratchPad } = this.state;
        return (
            <Container fluid className="vh-100">
                <Row className="h-100">
                    <Col md={2} className="bg-light">
                        <Nav defaultActiveKey="/timer" className="flex-column text-center pt-3">
                            <NavLink className="nav-link" to="/timer" onClick={() => this.toggleView(1)}>TIMER</NavLink>
                            <NavLink className="nav-link" to="/todo" onClick={() => this.toggleView(2)}>TO-DO LIST</NavLink>
                            <NavLink className="nav-link" to="/music" onClick={() => this.toggleView(3)}>MUSIC</NavLink>
                        </Nav>
                    </Col>
                    <Col md={10} className="bg-warning">
                        {/* <Switch>
                            <Route index element={<Timer />} /> 
                            <Route path="/timer" element={<Timer />} />
                            <Route path="/todo" element={<TodoList listItems={listItems} />} />
                            <Route path="/music" element={<Music />} />                 
                        </Switch>                */}
                        <Timer isActive={this.state.showTimer} />      
                        <TodoList isActive={this.state.showTodoList} />
                        <Music isActive={this.state.showMusic} /> 
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;