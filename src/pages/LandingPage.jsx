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
}) => {
  return (
    <div className="container">
      <Header toggleCart={toggleCart} />
      <Carousel />
      <Category
        category={category}
        productCategory={productCategory}
        getProducts={getProducts}
      />
      <Products product={product} />
      <CartSidebar toggleCart={toggleCart} />
    </div>
  );
};

export default LandingPage;
