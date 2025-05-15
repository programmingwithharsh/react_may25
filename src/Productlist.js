import Product from './Product';
import Star from './Star';
import Title from './Title';
export default function ProductList(props) {
    // console.log("ProductList Component", props);
    return <div>
        <h1>This is Product List Functional Component</h1>
        <Product />
        <Star />
        <Title />
    </div>
}