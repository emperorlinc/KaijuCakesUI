import { CiMenuBurger } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import { BiArrowBack, BiSearch } from "react-icons/bi";

const Header = ({ toggleCart, cart, toggleSearch, search }) => {
  if (search) {
    return (
      <nav className="navbar">
        <div className="nav-container">
          <div className="search-wrapper">
            <button className="icon-default" onClick={toggleSearch}>
              <BiArrowBack style={{ fontSize: "20px" }} />
            </button>
            <input
              type="text"
              className="searchbar"
              placeholder="Filter by celebrations, flavours, colors..."
            />
          </div>
        </div>
      </nav>
    );
  }

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
          <button
            id="cart-toggle"
            className="cart-button"
            onClick={toggleSearch}
          >
            <BiSearch style={{ fontSize: "18px" }} />
          </button>
          <button
            id="search-toggle"
            className="icon-default"
            onClick={toggleCart}
          >
            <CgShoppingCart style={{ fontSize: "18px" }} />
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
            <CiMenuBurger style={{ fontSize: "18px" }} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
