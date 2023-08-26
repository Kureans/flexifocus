import { Component } from 'react';
import Timer from './TimerComponent';
import TodoList from './TodoListComponent';
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
            showMusic: "none"
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
                    showMusic: "none"
                });
                break;
            case 2:
                this.setState({
                    showTimer: false,
                    showTodoList: true,
                    showMusic: "none"
                });
                break;
            case 3:
                this.setState({
                    showTimer: false,
                    showTodoList: false,
                    showMusic: "block"
                });  
                break;
        }
    }

    render() {
        // const { showTimer, showTodoList, showMusic, showScratchPad } = this.state;
        return (
            <Container fluid className="vh-100">
                <Row className="h-100">
                    <Col md={2} className="sky-blue">
                        <Nav defaultActiveKey="/timer" className="flex-column text-center pt-3">
                            <NavLink className="nav-link" to="/timer" onClick={() => this.toggleView(1)}>TIMER</NavLink>
                            <NavLink className="nav-link" to="/todo" onClick={() => this.toggleView(2)}>TO-DO LIST</NavLink>
                            <NavLink className="nav-link" to="/music" onClick={() => this.toggleView(3)}>MUSIC</NavLink>
                        </Nav>
                    </Col>
                    <Col md={10} className="light-blue">
                        <Timer isActive={this.state.showTimer} />      
                        <TodoList isActive={this.state.showTodoList} />
                        <iframe
                            title="lofi-beats"
                            style={{ borderRadius: 12, marginTop: 24, display:`${this.state.showMusic}`}}
                            src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn?utm_source=generator"
                            width="100%"
                            height="80%"
                            frameBorder={0}
                            allowFullScreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                        
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;