import React, { Component } from "react";

class Header extends Component {

    render() {

        return(
            <header>
                You have {this.props.tasksCount} Todos 
            </header>
        )
    }
}

export default Header;