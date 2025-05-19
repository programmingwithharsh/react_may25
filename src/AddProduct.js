import React from 'react';
import { Navigate } from 'react-router-dom';

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        // console.log("AddProduct", this.props);
        console.log("1 AddProduct constructor lifecycle");
        this.state = {
            redirect: false
        }
    }

    componentDidMount() { // any API Call
        console.log("3 AddProduct componentDidMount lifecycle");
        localStorage.setItem("x", 2); // number
        localStorage.setItem("username", "Sravanthi"); // string
        localStorage.setItem("active", true); // boolean
        localStorage.setItem("user", JSON.stringify({ id: 1, username: "Poorti" })); // object
        localStorage.setItem("users", JSON.stringify([{ id: 1, username: "Poorti" }, { id: 2, username: "Surya" }])); // array of object

        /*
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
        */
    }

    handleSubmit = (event) => {
        event.preventDefault(); // stop page refresh

        const productName = event.target.elements.productName.value;
        const productCode = event.target.elements.productCode.value;
        const releaseDate = event.target.elements.releaseDate.value;
        const description = event.target.elements.description.value;
        const price = event.target.elements.price.value;
        const starRating = event.target.elements.starRating.value;
        const imageUrl = event.target.elements.imageUrl.value;

        if (productName === "") {
            alert("Please enter product name");
        }

        const product = {
            productId: Number(new Date()),
            productName: productName,
            productCode: productCode,
            releaseDate: releaseDate,
            description: description,
            price: price,
            starRating: starRating,
            imageUrl: imageUrl
        }

        // Store product inside Localstorage
        localStorage.setItem("product", JSON.stringify(product));
        this.setState({ // whenever state update, component rerender
            redirect: true
        })
    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillUnmount() {
        console.log("AddProduct componentWillUnmount");
    }

    render() {
        console.log("2 AddProduct render lifecycle");
        const { redirect } = this.state;
        return <div className="mt-4">
            {
                redirect && (
                    <Navigate to="/products" />
                )
            }
            <h1>Add Product Form</h1>
            <form className='col-xxl-6' onSubmit={this.handleSubmit}>
                Product Name <input className='form-control' type='text' placeholder='Enter Product Name' name='productName' />
                Product Code <input className='form-control' type='text' placeholder='Enter Product Code' name='productCode' />
                Release Date <input className='form-control' type='date' name='releaseDate' />
                Description <input className='form-control' type='text' placeholder='Enter Description' name='description' />
                Price <input className='form-control' type='number' placeholder='Enter Price' name='price' />
                Rating <input className='form-control' type='number' placeholder='Enter Rating' name='starRating' />
                ImageUrl <input className='form-control' type='text' placeholder='Enter Rating' name='imageUrl' />
                <button className='btn btn-primary mt-2'>Add Product</button>
            </form>
        </div>
    }
}

export default AddProduct;