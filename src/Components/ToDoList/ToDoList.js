import React, { Component } from "react";
import Header from './components/Header';
import SubmitForm from "./components/SubmitForm";

class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }

        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo(value) {

        this.setState({
            // tasks: [...this.state.tasks, value]
            tasks: this.state.tasks.concat(value)
        })
    }

    render() {

        console.log(this.state.tasks);

        return(
            <div>
                <Header tasksCount={this.state.tasks.length}/>
                <SubmitForm onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
}

export default ToDoList;