import React, { Component } from "react";
import { v4 } from 'uuid';

class SubmitForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value})
    }

    handleAddTodo(e) {
        e.preventDefault();

        if(this.state.value) {
            this.props.onAddTodo({
                id: v4(),
                value: this.state.value
            });
    
        }

        this.setState({value:''})
    }

    render() {

        return(
            <form onSubmit={this.handleAddTodo}>
                <input type='text' value={this.state.value} onChange={this.handleChange}/>
                <input type='submit' value='Submit'/>
            </form>
        )
    }
}

export default SubmitForm;