import { Component } from 'react';
import Sidebar from './SidebarComponent';
import Timer from './TimerComponent';
import TodoList from './TodoListComponent';
import Music from './MusicComponent';
import ScratchPad from './ScratchPadComponent';
import { Container, Row, Col } from 'react-bootstrap';
import { Routes as Switch, Route } from 'react-router-dom';
import '../App.css';

class Home extends Component {

    render() {
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
                            <Route path="/todo" element={<TodoList />} />
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