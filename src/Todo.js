import React, {Component, Fragment} from 'react';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
        };
        this.handleCheck = this.handleCheck.bind(this);
        this.interval = setInterval(function() {

        }, 1000);
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleCheck() {
        this.setState({done: true});
    }

    render() {
        return (
            <Fragment>
                <h2>{this.props.title}</h2>
                <p>{this.props.body}</p>
                <button onClick={this.handleCheck}>Check</button>
                {this.state.done && <p>This to do is done</p>}
            </Fragment>
        );
    }
}

export class Foo {

}
