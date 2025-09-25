import { CiMenuBurger } from "react-icons/ci";
import { BiSearch, BiShoppingBag } from "react-icons/bi";

const Header = () => {
  return (
    <div className="header">
      <button className="remove-outline-btn">
        <CiMenuBurger />
      </button>
      <div className="search-wrapper">
        <BiSearch />
        <input type="text" placeholder="What are you looking for?" />
      </div>
      <button className="remove-outline-btn">
        <BiShoppingBag />
      </button>
    </div>
  );
};

export default Header;
