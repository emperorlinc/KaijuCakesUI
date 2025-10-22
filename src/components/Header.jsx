import { CiMenuBurger } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";

const Header = ({ toggleCart, cart }) => {
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
            <CgShoppingCart style={{ fontSize: "16px" }} />
            <span id="cart-count" className="cart-count">
              {cart.length}
            </span>
          </button>
          <button
            className="mobile-menu-button"
            // onClick={() => {
            //   document.querySelector(".nav-menu").style.display = "block";
            // }}
          >
            <CiMenuBurger />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
