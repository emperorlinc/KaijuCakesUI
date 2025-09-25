import Header from "../components/Header";
import Category from "../components/Category";
import Products from "../components/Products";

const LandingPage = ({ category, product }) => {
  return (
    <div className="container">
      <Header />
      <Category category={category} />
      <Products product={product} />
    </div>
  );
};

export default LandingPage;
