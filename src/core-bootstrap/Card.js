import { Link } from 'react-router-dom';

function Card() {
    return (<>
        <h1>Card Example</h1>
        <div class="card" style={{ width: "18rem" }}>
            <img src="https://m.media-amazon.com/images/I/71BY+Xg9OuL._AC_UY218_.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <Link className="btn btn-primary" to="/" >Go somewhere</Link>
            </div>
        </div>
    </>);
}

export default Card;