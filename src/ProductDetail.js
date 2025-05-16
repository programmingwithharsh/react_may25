import { useParams, useNavigate } from 'react-router-dom';

function ProductDetail() {
    let { id } = useParams();
    const navigate = useNavigate();

    const goBack = () => {
        navigate("/products");
    }

    return <>
        <h1>Product Detail Page - {id}</h1>
        <button className="btn btn-primary" onClick={goBack}>Go Back</button>
    </>
}

export default ProductDetail;