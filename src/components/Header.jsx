import { CiMenuBurger } from "react-icons/ci";
import { BiSearch, BiShoppingBag } from "react-icons/bi";

const Header = ({ toggleCart }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <i data-feather="cake" className="logo-icon"></i>
          <span className="logo-text">Kaiju's Cake</span>
        </div>
        <div className="nav-menu">
          <a href="#" className="nav-link active">
            Home
          </a>
          <a href="#" className="nav-link">
            Cakes
          </a>
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
        </div>
        <div className="nav-actions">
          <button id="cart-toggle" className="cart-button" onClick={toggleCart}>
            <BiShoppingBag />
            <span id="cart-count" className="cart-count">
              0
            </span>
          </button>
          <button className="mobile-menu-button">
            <CiMenuBurger />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
