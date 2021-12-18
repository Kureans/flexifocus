import { Component } from 'react';

class Todo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            todo: props.todo
        };
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default Todo;