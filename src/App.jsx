import { useState, useEffect } from "react";

import LandingPage from "./pages/LandingPage";

function App() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartState, setCartState] = useState(false);

  useEffect(() => {
    getCategories();
    getProducts();
    getCart();
  }, []);

  const getCategories = () => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/category/")
      .then((response) => response.json())
      .then((data) => {
        setCategory(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error: ", error));
  };

  const getProducts = () => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/cakes/")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error: ", error));
  };

  const productCategory = (id) => {
    setLoading(true);
    fetch(`http://127.0.0.1:8000/api/category/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error: ", error));
  };

  const toggleCart = () => {
    if (!cartState) {
      document.querySelector("#cart-sidebar").classList.add("cart-open");
      setCartState(!cartState);
    } else {
      document.querySelector("#cart-sidebar").classList.remove("cart-open");
      setCartState(!cartState);
    }
  };

  const getCart = () => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/api/cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token ebb3ff1bc536ea493e42ff3a3242369d7fb5fb4f",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCart(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error: ", error));
  };

  const add_to_cart = (cart_id) => {
    fetch(`http://127.0.0.1:8000/api/add_to_cart/${cart_id}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token ebb3ff1bc536ea493e42ff3a3242369d7fb5fb4f",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("Data: ", data))
      .catch((error) => console.error("Error: ", error));
  };

  const remove_cart_item = (cart_id) => {
    fetch(`http://127.0.0.1:8000/api/remove_cart_item/${cart_id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token ebb3ff1bc536ea493e42ff3a3242369d7fb5fb4f",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("Data: ", data))
      .catch((error) => console.error("Error: ", error));
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="load"></div>
      </div>
    );
  }

  return (
    <>
      <LandingPage
        category={category}
        product={product}
        toggleCart={toggleCart}
        productCategory={productCategory}
        getProducts={getProducts}
        cart={cart}
        add_to_cart={add_to_cart}
        remove_cart_item={remove_cart_item}
      />
    </>
  );
}

export default App;
