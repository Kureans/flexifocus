import { Component } from 'react';
import Sidebar from './SidebarComponent';
import Timer from './TimerComponent';
import TodoList from './TodoListComponent';
import Music from './MusicComponent';
import ScratchPad from './ScratchPadComponent';
import { Container, Row, Col } from 'react-bootstrap';
import { Routes as Switch, Route } from 'react-router-dom';
import { LIST_ITEMS as listItems } from '../shared/listItems.js';
import '../App.css';

class Home extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showTimer: true,
    //         showTodoList: false,
    //         showMusic: false,
    //         showScratchPad: false
    //     };

    //     this.hideComponent = this.hideComponent.bind(this);
    // }

    // hideComponent(name) {
    //     switch(name) {
    //         case "timer":
    //             this.setState({ showTimer: !this.state.showTimer });
    //             break;
    //         case "todo":
    //             this.setState({ showTodoList: !this.state.showTodoList });
    //             break;
    //         case "music":
    //             this.setState({ showMusic: !this.state.showMusic });
    //             break;
    //         case "pad":
    //             this.setState({ showScratchPad: !this.state.showScratchPad });
    //             break;
    //         default:
    //             null;
    //     }
    // }

    render() {
        // const { showTimer, showTodoList, showMusic, showScratchPad } = this.state;
        return (
            <Container fluid className="vh-100">
                <Row className="h-100">
                    <Col md={2} className="bg-light">
                        <Sidebar/>
                    </Col>
                    <Col md={10} className="bg-warning">
                        <Switch>
                            <Route index element={<Timer />} /> 
                            <Route path="/timer" element={<Timer />} />
                            <Route path="/todo" element={<TodoList listItems={listItems} />} />
                            <Route path="/music" element={<Music />} />
                            <Route path="/scratchpad" element={<ScratchPad />} />                            
                        </Switch>                     
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;