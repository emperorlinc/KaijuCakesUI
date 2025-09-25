import Header from "../components/Header";
import Category from "../components/Category";
import Products from "../components/Products";
import Carousel from "../components/Carousel";

const LandingPage = ({ category, product }) => {
  return (
    <div className="container">
      <Header />
      <Carousel />
      <Category category={category} />
      <Products product={product} />
    </div>
  );
};

export default LandingPage;
