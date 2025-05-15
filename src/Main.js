import React from 'react';
import ProductList from './Productlist';
import AddProduct from './AddProduct';
import Welcome from './Welcome';
import Title from './Title';
import Star from './Star';

export default class Main extends React.Component { // In ES6 Exporting a module, component

    constructor(props) { // lifecycle
        super(props);
        // console.log(this.props);
        console.log("Constructor lifecycle");
    }

    render() { // render lifecycle
        console.log("Render lifecycle");
        console.log(this.state);

        return <div>

            <h1>This is Main Class Component</h1>

            <ProductList {...this.props} />
            <AddProduct data={this.state} />
            <Welcome message="Welcome to Dashboard" {...this.props} />
            <Title title="This is Title" />
            <Star />
        </div>
    }
}