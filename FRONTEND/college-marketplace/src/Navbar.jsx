import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Kris2Kart
      </div>

      <ul className="nav-links">

        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#marketplace">Marketplace</a>
        </li>

        <li>
          <Link to="/sell">Sell Item</Link>
        </li>

        <li>
          <a href="#">Contact</a>
        </li>

      </ul>

      <button className="login-btn">
        Login
      </button>

    </nav>
  );
}

export default Navbar;





