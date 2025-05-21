import Product from './Product';
import Star from './Star';
import Title from './Title';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Productlist.css';

export default function ProductList(props) {
    console.log("ProductList Component", props.products);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div className="mt-4">
        <h1>This is Product List Functional Component</h1>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th></th>
                    <th>Product Name</th>
                    <th>Code</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.products.map((product, index) => (
                        <tr key={index}>
                            <td><img src={product.imageUrl} width="50" height="50" alt="" /></td>
                            <td><Link to={`/products/${product.productId}`}>{product.productName}</Link></td>
                            <td>{product.productCode}</td>
                            <td>{product.releaseDate}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.starRating} <Star /></td>
                            <td> <Link to={`/products/${product.productId}`}>Edit</Link>
                                <Button variant="link" onClick={handleShow}>
                                    Delete
                                </Button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <Product />
        <Title title="Demo" />
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you Sure?</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    OK
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
}