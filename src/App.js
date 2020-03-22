import React, { Component, Fragment } from 'react';
import TodoList from './TodoList';
import logo from './logo.svg';
import './App.css';

const todos = [
    { title: "Todo 1", body: "Task To do 1"},
    { title: "Todo 2", body: "Task To do 2"},
    { title: "Todo 3", body: "Task To do 3"}
];

class App extends Component {
  constructor(props) {
    super(props);
  }

    render() {
    return (
        <Fragment>
            <TodoList todos={todos} />
        </Fragment>
    );
  }
}

export default App;
