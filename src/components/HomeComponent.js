import { Component } from 'react';
import Sidebar from './SidebarComponent';
import Timer from './TimerComponent';
import Todo from './TodoComponent';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                        <Timer/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;