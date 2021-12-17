import { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
    
    render() {
        return (
            <Nav defaultActiveKey="/timer" className="flex-column text-center pt-3">
                <Nav.Link href="/timer">TIMER</Nav.Link>
                <Nav.Link eventKey="todolist">TO-DO LIST</Nav.Link>
                <Nav.Link eventKey="music">MUSIC</Nav.Link>
                <Nav.Link eventKey="scratchpad">SCRATCHPAD</Nav.Link>
            </Nav>
        );
    }
}

export default Sidebar;