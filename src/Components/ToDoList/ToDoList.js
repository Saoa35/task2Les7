import React, { Component } from "react";
import Header from './components/Header';
import List from "./components/List";
import SubmitForm from "./components/SubmitForm";

class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleDeleteToDo = this.handleDeleteToDo.bind(this);
    }

    handleAddTodo(value) {

        this.setState({
            // tasks: [...this.state.tasks, value]
            tasks: this.state.tasks.concat(value)
        })
    }

    handleDeleteToDo(id) {

        console.log(id)

        this.setState({
           tasks: this.state.tasks.filter(item => item.id !== id)
        })
    }

    render() {

        console.log(this.state.tasks);

        return(
            <div>
                <Header tasksCount={this.state.tasks.length}/>
                <SubmitForm onAddTodo={this.handleAddTodo}/>
                <List list={this.state.tasks} onDelete={this.handleDeleteToDo}/>
            </div>
        )
    }
}

export default ToDoList;