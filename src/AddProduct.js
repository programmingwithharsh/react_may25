import React from 'react';
class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        console.log("AddProduct", this.props);
        console.log("1 constructor lifecycle");
    }

    componentDidMount() { // any API Call
        console.log("3 componentDidMount lifecycle");
        localStorage.setItem("x", 2); // number
        localStorage.setItem("username", "Sravanthi"); // string
        localStorage.setItem("active", true); // boolean
        localStorage.setItem("user", JSON.stringify({ id: 1, username: "Poorti" })); // object
        localStorage.setItem("users", JSON.stringify([{ id: 1, username: "Poorti" }, { id: 2, username: "Surya" }])); // array of object

        console.log(typeof localStorage.getItem("x"));
        console.log(typeof localStorage.getItem("username"));
        console.log(typeof localStorage.getItem("active"));
        console.log(typeof localStorage.getItem("user"));
        console.log(typeof localStorage.getItem("users"));

        console.log(localStorage.getItem("x"));
        console.log(localStorage.getItem("username"));
        console.log(localStorage.getItem("active"));
        console.log(JSON.parse(localStorage.getItem("user")));
        console.log(JSON.parse(localStorage.getItem("users")));
    }

    render() {
        console.log("2 render lifecycle");
        return (<h1>This is Add Product Class Component</h1>);
    }
}

export default AddProduct;