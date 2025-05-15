import React from 'react';
import ProductList from './Productlist';
import AddProduct from './AddProduct';
import Welcome from './Welcome';
import Title from './Title';
import Star from './Star';

export default class Main extends React.Component { // In ES6 Exporting a module, component

    constructor(props) { // lifecycle
        super(props);
        console.log(this.props);
    }

    render() { // render lifecycle
        return <div>
            <h1>This is Main Class Component</h1>
            <div>Props x is {this.props.x}</div>
            <div>Props username is {this.props.usernameProps}</div>
            <div>Props interests is {this.props.interestsProps[0]}</div>
            <div>Props birth place is {this.props.birthProps.place}</div>
            <ProductList {...this.props} />
            <AddProduct />
            <Welcome message="Welcome to Dashboard" />
            <Title title="This is Title" />
            <Star />
        </div>
    }
}