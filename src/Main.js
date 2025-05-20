import React from 'react';
import ProductList from './Productlist';
import AddProduct from './AddProduct';
import Welcome from './Welcome';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Title from './Title';
import BootstrapExample from './core-bootstrap/BootstrapExample';
import NotFound from './NotFound';
import ProductDetail from './ProductDetail';
import Login from './Login';
import Register from './Register';
import HooksExample from './hooks/HooksExample';
import ReactBootstrapExample from './react-bootstrap/ReactBootstrapExample';
import { removeProduct, loadProducts, addProduct } from './redux/actions';

export default class Main extends React.Component { // In ES6 Exporting a module, component

    constructor(props) { // lifecycle
        super(props);
        // console.log(this.props);
        console.log("Constructor lifecycle");
        this.state = {
            products: [
                {
                    "productId": 1,
                    "productName": "Leaf Rake",
                    "productCode": "GDN-0011",
                    "releaseDate": "March 19, 2016",
                    "description": "Leaf rake with 48-inch wooden handle.",
                    "price": 19.95,
                    "starRating": 3.2,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                },
                {
                    "productId": 2,
                    "productName": "Garden Cart",
                    "productCode": "GDN-0023",
                    "releaseDate": "March 18, 2016",
                    "description": "15 gallon capacity rolling garden cart",
                    "price": 32.99,
                    "starRating": 4.2,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                },
                {
                    "productId": 3,
                    "productName": "Hammer",
                    "productCode": "TBX-0048",
                    "releaseDate": "May 21, 2016",
                    "description": "Curved claw steel hammer",
                    "price": 8.9,
                    "starRating": 4.8,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                },
                {
                    "productId": 4,
                    "productName": "Saw",
                    "productCode": "TBX-0022",
                    "releaseDate": "May 15, 2016",
                    "description": "15-inch steel blade hand saw",
                    "price": 11.55,
                    "starRating": 3.7,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
                },
                {
                    "productId": 5,
                    "productName": "Video Game Controller",
                    "productCode": "GMG-0042",
                    "releaseDate": "October 15, 2015",
                    "description": "Standard two-button video game controller",
                    "price": 35.95,
                    "starRating": 4.6,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
                }
            ]
        }
    }

    componentDidMount() {
        this.props.dispatch(loadProducts()); // calling load Products action
        this.props.dispatch(removeProduct(1)); // calling remove product action and passing index value 1
        this.props.dispatch(addProduct( // calling add product action and passing new product
            {
                productId: 6,
                productName: 'Iphone',
                productCode: 'GDN-0011',
                releaseDate: 'March 19, 2025',
                description: 'Iphone is Excellent Phone',
                price: 85000,
                starRating: 5,
                imageUrl: 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
            }))
    }

    render() { // render lifecycle
        console.log("Render lifecycle");
        console.log(this.state);

        return <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Welcome message="Welcome to Dashboard" {...this.props} />} />
                    <Route path="/addproduct" element={<AddProduct data={this.state} />} />
                    <Route path="/products" element={<ProductList products={this.state.products} />} />
                    <Route path="/corebootstrap" element={<BootstrapExample />} />
                    <Route path="/reactbootstrap" element={<ReactBootstrapExample />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/hooks" element={<HooksExample />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="/title" element={<Title title="demo" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    }
}