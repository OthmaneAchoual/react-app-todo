import React, { Component } from 'react';
import Todo from "./Todo";

export default class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { todos } = this.props;
        return (
            todos.map(todo => <Todo title={todo.title} body={todo.body} />)
        );
    }
}
