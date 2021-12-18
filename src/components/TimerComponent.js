import { Component } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup, ProgressBar } from 'react-bootstrap';
import '../App.css';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workTime: 1500,
            breakTime: 300,
            isWork: true,
            isTicking: false
        };

        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    toggleWorkBreak() {
        this.setState((state) => ({
            isWork: !state.isWork
        }));
    }

    workTimeTick() {
        this.setState((state) => ({
            workTime: (state.workTime - 1)
        }));
    }

    startTimer() {
        if (!this.state.isTicking) {
            this.timerID = setInterval(() => this.workTimeTick(), 1000);
            this.setState({ isTicking: true });
        }     
    }

    pauseTimer() {
        if (this.state.isTicking) {
            clearInterval(this.timerID);
            this.setState({ isTicking: false });
        }
    }

    resetTimer() {
        this.pauseTimer();
        this.setState({ workTime: 1500 });
    }
    
    render() {

        const workTimeMinutes = Math.floor((this.state.workTime / 60));
        const workTimeSeconds = () => {
            let seconds = this.state.workTime % 60;
            return (seconds < 10) ? (`0${seconds}`) : seconds;
        }  

        const bgColor = (this.state.isWork) ? "danger" : "success";
        const progBarPercent = 100 - ((this.state.workTime / 1500) * 100);

        return (
            <Container fluid className="h-100">
                <Row>
                    <Col md={{span: 8, offset: 2}} className="pt-5">
                        <Card className="text-center" bg={bgColor} text="white">
                            <Card.Header>Timer</Card.Header>
                            <Card.Body>
                                <Card.Title>Pomodoro Cycle</Card.Title>
                                <Card.Text className="big-font">{workTimeMinutes}:{workTimeSeconds()}</Card.Text>
                                <ButtonGroup size="lg">
                                    <Button variant="outline-light" onClick={this.startTimer}>Start</Button>
                                    <Button variant="outline-light" onClick={this.pauseTimer}>Pause</Button>
                                    <Button variant="outline-light" onClick={this.resetTimer}>Reset</Button>
                                </ButtonGroup>
                                <div className="pt-3">
                                <ProgressBar animated now={progBarPercent} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Timer;