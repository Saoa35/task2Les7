import React, { Component } from 'react';


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

export default class ComponentRender extends Component {

    render() {

        return(
            <div>
                <h2>
                ComponentRender
                </h2>

                <MyComponents.Comp1/>
                <MyComponents.Comp2 name='Alexandr'/>

            </div>
        )
    }
}