import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <li className="list-item"><Link to="/">Store</Link></li>
      </ul>
      <ul className="nav-ul">
        <li className="list-item">
          <input type="text" htmlFor="search-input" className="search-input" />
        </li>
      </ul>
      <ul className="nav-ul nav-ul-right">
        <li className="list-item"><Link to="/cart">Cart</Link></li>
        <li className="list-item">Wishlist</li>
        <li className="list-item">Logout</li>
      </ul>
    </nav>
  );
};
export { Navbar };
