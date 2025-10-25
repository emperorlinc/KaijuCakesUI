import Header from "../components/Header";
import Category from "../components/Category";
import Products from "../components/Products";
import Carousel from "../components/Carousel";
import CartSidebar from "../components/CartSidebar";

const LandingPage = ({
  category,
  product,
  toggleCart,
  productCategory,
  getProducts,
  cart,
  add_to_cart,
  remove_cart_item,
  toggleSearch,
  search,
}) => {
  return (
    <div className="container">
      <Header
        toggleCart={toggleCart}
        cart={cart}
        toggleSearch={toggleSearch}
        search={search}
      />
      <Carousel />
      <Category
        category={category}
        productCategory={productCategory}
        getProducts={getProducts}
      />
      {product.length > 0 ? (
        <Products product={product} add_to_cart={add_to_cart} />
      ) : (
        <div className="empty">No item here yet.</div>
      )}
      {/* <CartSidebar
        toggleCart={toggleCart}
        cart={cart}
        remove_cart_item={remove_cart_item}
      /> */}
    </div>
  );
};

export default LandingPage;
