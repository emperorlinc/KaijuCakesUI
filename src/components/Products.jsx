import { TbThumbUp } from "react-icons/tb";

const Products = ({ product, add_to_cart }) => {
  return (
    <>
      {product.map((cake) => (
        <div className="cake-card" key={cake.id}>
          <div className="cake-image">
            <img src={cake.image} alt="" />
          </div>
          <div className="cake-details">
            <div>
              <h3 className="cake-name">{cake.name}</h3>
              {/* <p className="cake-description">{cake.description}</p> */}
            </div>
            <p className="cake-price">${cake.price}</p>
          </div>
          <button
            className="add-to-cart-btn"
            onClick={() => add_to_cart(cake.id)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </>
  );
};

export default Products;
