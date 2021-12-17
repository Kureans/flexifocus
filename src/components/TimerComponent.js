import { Component } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import '../App.css';

class Timer extends Component {

    render() {
        return (
            <Container fluid className="h-100">
                <Row>
                    <Col md={{span: 8, offset: 2}} className="pt-5">
                        <Card className="text-center" bg="danger" text="white">
                            <Card.Header>Timer</Card.Header>
                            <Card.Body>
                                <Card.Title>Pomodoro Cycle</Card.Title>
                                <Card.Text className="big-font">00:00</Card.Text>
                                <ButtonGroup size="lg">
                                    <Button variant="outline-light">Start</Button>
                                    <Button variant="outline-light">Pause</Button>
                                    <Button variant="outline-light">Clear</Button>
                                </ButtonGroup>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Timer;