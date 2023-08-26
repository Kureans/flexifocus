import { Container, Row, Col } from "react-bootstrap";

const About = () => {
    return (
        <Container fluid className="vh-100 light-blue pt-2">
            <Row>
                <Col sm={{span: 10, offset: 1}}>
                <p className="text-justify">
                This is flexi-focus 1.0, a simple productivity app to keep you on track with your daily tasks. Features for 1.0 include
a to-do list for task management, and pomodoro timer to manage work-rest cycles.</p>
                </Col>
            </Row>
           

        </Container>
        
    );
}

export default About;