import React, { Component } from 'react';

export default class ComponentRender extends Component {

    const MyComponents = {
        Comp1: () => <div>render Component 1</div>,
        Comp2: ({ name }) => {
            return(
                <div>
                    <h3>Hi! My name is {name}</h3>
                </div>
            )
        }
    }

    render() {

        return(
            <div>
                <h2>
                ComponentRender
                </h2>
            </div>
        )
    }
}