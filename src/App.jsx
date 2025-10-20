import { useState, useEffect } from "react";

import LandingPage from "./pages/LandingPage";

function App() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartState, setCartState] = useState(false);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = () => {
    fetch("http://127.0.0.1:8000/api/category/")
      .then((response) => response.json())
      .then((data) => {
        setCategory(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error: ", error));
  };

  const getProducts = () => {
    fetch("http://127.0.0.1:8000/api/cakes/")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error: ", error));
  };

  const productCategory = (id) => {
    fetch(`http://127.0.0.1:8000/api/category/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error: ", error));
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="load"></div>
      </div>
    );
  }

  const toggleCart = () => {
    if (!cartState) {
      document.querySelector("#cart-sidebar").classList.add("cart-open");
      setCartState(!cartState);
    } else {
      document.querySelector("#cart-sidebar").classList.remove("cart-open");
      setCartState(!cartState);
    }
  };

  return (
    <>
      <LandingPage
        category={category}
        product={product}
        toggleCart={toggleCart}
        productCategory={productCategory}
        getProducts={getProducts}
      />
    </>
  );
}

export default App;
