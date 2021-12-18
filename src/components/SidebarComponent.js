import { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
    
    render() {
        return (
            <Nav defaultActiveKey="/timer" className="flex-column text-center pt-3">
                <NavLink className="nav-link" to="/timer">TIMER</NavLink>
                <NavLink className="nav-link" to="/todo">TO-DO LIST</NavLink>
                <NavLink className="nav-link" to="/music">MUSIC</NavLink>
                <NavLink className="nav-link" to="/scratchpad">SCRATCHPAD</NavLink>
            </Nav>
        );
    }
}

export default Sidebar;