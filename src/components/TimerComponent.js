import { Component } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup, ProgressBar } from 'react-bootstrap';
import  '../App.css';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time: 1,
            isWork: true,
            isTicking: false
        };

        this.toggleTimer = this.toggleTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.toggleWork = this.toggleWork.bind(this);
        this.toggleBreak = this.toggleBreak.bind(this);
    }

    toggleWork() {
        this.resetTimer();
        this.setState({ 
            isWork: true,
            time: 1500
        });
    }

    toggleBreak() {
        this.resetTimer();
        this.setState({ 
            isWork: false,
            time: 300
        });
    }

    tick() {
        if (this.state.time > 0) {
            this.setState((state) => ({
                time: (state.time - 1)
            }));
        } else {
            this.onFinishCycle();
        }
    }

    startTimer() {
        this.timerID = setInterval(() => this.tick(), 1000);
        this.setState({ isTicking: true });  
    }

    pauseTimer() {
        clearInterval(this.timerID);
        this.setState({ isTicking: false });
    }

    toggleTimer() {
        if (!this.state.isTicking) {
            this.startTimer();
        } else {
            this.pauseTimer();
        }
    }

    resetTimer() {
        let initialTime = (this.state.isWork) ? 1500 : 300;
        this.pauseTimer();
        this.setState({ time: initialTime });
    }

    playAlarm() {
        let audio = new Audio('./alarm.wav');
        audio.play();
    }

    onFinishCycle() {
        this.playAlarm();
        if (this.state.isWork) {
            alert("Finished a work cycle");
            this.toggleBreak();
        } else {
            alert("Finished a break cycle");
            this.toggleWork();
        }
    }
    
    render() {

        const initialTime = (this.state.isWork) ? 1500 : 300;
        const timeMinutes = Math.floor((this.state.time / 60));
        const timeSeconds = () => {
            let seconds = this.state.time % 60;
            return (seconds < 10) ? (`0${seconds}`) : seconds;
        }  

        const bgColor = (this.state.isWork) ? "danger" : "success";
        const startOrPauseText = (this.state.isTicking) ? "Pause" : "Start";
        const progBarPercent = 100 - ((this.state.time / initialTime) * 100);

        return (
            <Container fluid className="h-100">
                <Row>
                    <Col md={{span: 8, offset: 2}} className="pt-5">
                        <Card className="text-center" bg={bgColor} text="white">
                            <Card.Header>
                                <ButtonGroup size="lg">
                                    <Button variant={bgColor} active={this.state.isWork} onClick={this.toggleWork}>Work</Button>
                                    <Button variant={bgColor} active={!this.state.isWork} onClick={this.toggleBreak}>Break</Button>
                                </ButtonGroup>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Pomodoro Cycle</Card.Title>
                                <Card.Text className="big-font">{timeMinutes}:{timeSeconds()}</Card.Text>
                                <ButtonGroup size="lg">
                                    <Button variant="outline-light" onClick={this.toggleTimer}>{startOrPauseText}</Button>
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