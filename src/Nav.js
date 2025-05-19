import './Nav.css';
import { Link, Outlet } from 'react-router-dom';
const Nav = () => {
    return <div>
        <nav className="navbar bg-primary navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" >Dashboard</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/addproduct" >Add Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/products" >Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/corebootstrap">Core Bootstrap</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/hooks">Hooks</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className='container-fluid'>
            <Outlet />
        </div>
    </div>;
}

export default Nav;