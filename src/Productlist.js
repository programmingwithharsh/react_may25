import Product from './Product';

export default function ProductList(props) {
    console.log("ProductList Component", props);
    return <div>
        <h1>This is Product List Functional Component</h1>
        <Product />
    </div>
}