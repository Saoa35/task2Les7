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


const components = {
    comp1: () => <h4>render SMALL component 1</h4>,
    comp2: MyComponents.Comp2
}


export default class ComponentRender extends Component {

    render() {

        const Component1 = components.comp1;
        const Component2 = components.comp2;

        return(
            <div>
                <h2>
                ComponentRender
                </h2>

                {/* <MyComponents.Comp1/>
                <MyComponents.Comp2 name='Alexandr'/> */}

                <Component1/>
                <Component2 name='Alex'/>

            </div>
        )
    }
}