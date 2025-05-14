import React from 'react';
import ProductList from './Productlist';
import AddProduct from './AddProduct';
import Welcome from './Welcome';
import Title from './Title';
import Star from './Star';
import Product from './Product';

export default class Main extends React.Component { // In ES6 Exporting a module, component
    render() { // render lifecycle
        return <div>
            <h1>This is Main Class Component</h1>
            <ProductList />
            <AddProduct />
            <Welcome />
            <Title />
            <Star />
            <Product />
        </div>
    }
}