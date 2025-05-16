import Product from './Product';
import Star from './Star';
import Title from './Title';

export default function ProductList(props) {
    console.log("ProductList Component", props.products);
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
                </tr>
            </thead>
            <tbody>
                {
                    props.products.map((product, index) => (
                        <tr key={index}>
                            <td><img src={product.imageUrl} width="50" height="50" alt="" /></td>
                            <td>{product.productName}</td>
                            <td>{product.productCode}</td>
                            <td>{product.releaseDate}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.starRating} <Star /></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <Product />
        <Title title="Demo" />
    </div>
}