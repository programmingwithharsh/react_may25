import React from 'react';
import ProductList from './Productlist';
import AddProduct from './AddProduct';
import Welcome from './Welcome';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default class Main extends React.Component { // In ES6 Exporting a module, component

    constructor(props) { // lifecycle
        super(props);
        // console.log(this.props);
        console.log("Constructor lifecycle");
    }

    render() { // render lifecycle
        console.log("Render lifecycle");
        console.log(this.state);

        return <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Welcome message="Welcome to Dashboard" {...this.props} />} />
                    <Route path="/addproduct" element={<AddProduct data={this.state} />} />
                    <Route path="/products" element={<ProductList {...this.props} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    }
}