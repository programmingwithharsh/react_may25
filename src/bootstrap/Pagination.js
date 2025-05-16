import { Link } from 'react-router-dom';

function Pagination() {
    return <>
        <h1>Pagination Example</h1>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                    <Link className="page-link" to="/" >Previous</Link></li>
                <li class="page-item"><Link className="page-link" to="/" >1</Link></li>
                <li class="page-item"><Link className="page-link" to="/" >2</Link></li>
                <li class="page-item"><Link className="page-link" to="/" >3</Link></li>
                <li class="page-item"><Link className="page-link" to="/" >Next</Link></li>
            </ul>
        </nav></>
}

export default Pagination;