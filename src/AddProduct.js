import React from 'react';
class AddProduct extends React.Component {
    constructor(props){
        super(props);
        console.log("AddProduct", this.props);
    }
    render() {
        debugger
        return (<h1>This is Add Product Class Component</h1>);
    }
}

export default AddProduct;