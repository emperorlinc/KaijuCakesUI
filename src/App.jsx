import { useState, useEffect } from "react";

import LandingPage from "./pages/LandingPage";

function App() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = () => {
    fetch("http://127.0.0.1:8000/api/category/")
      .then((response) => response.json())
      .then((data) => {
        setCategory(data);
        // setLoading(false);
      })
      .catch((error) => console.error("Error: ", error));
  };

  const getProducts = () => {
    fetch("http://127.0.0.1:8000/api/cakes/")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        // setLoading(false);
      })
      .catch((error) => console.error("Error: ", error));
  };

  // if (loading) {
  //   return <div className="loading">Loading...</div>;
  // }

  return (
    <>
      <LandingPage category={category} product={product} />
    </>
  );
}

export default App;
