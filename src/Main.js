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
        this.state = {
            username: "Surabhi",
            address: "Jaipur"
        }
        console.log("Constructor lifecycle");
    }

    updateDetails = () => {
        this.setState({ // Whenever state update, component rerender
            username: "Surya",
            address: "Bhubneshwar",
            pin: "212121"
        })
    }

    render() { // render lifecycle
        console.log("Render lifecycle");
        console.log(this.state);
        return <div>
            <h1>This is Main Class Component</h1>
            <div>State Username is {this.state.username} and address is {this.state.address}</div>
            <button onClick={this.updateDetails}>Update State Details</button>
            <div>Props x is {this.props.x}</div>
            <div>Props username is {this.props.usernameProps}</div>
            <div>Props interests is {this.props.interestsProps[0]}</div>
            <div>Props birth place is {this.props.birthProps.place}</div>
            <ProductList {...this.props} />
            <AddProduct data={this.state} />
            <Welcome message="Welcome to Dashboard" />
            <Title title="This is Title" />
            <Star />
        </div>
    }
}