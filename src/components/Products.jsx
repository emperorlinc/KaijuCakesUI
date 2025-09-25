import { TbThumbUp } from "react-icons/tb";

const Products = ({ product }) => {
  return (
    <div className="product-wrapper">
      {product.map((element) => (
        <div key={element.id} className="product">
          <div className="product-category">{element.category.name}</div>
          <div className="image-wrapper">
            <img src={element.image} />
          </div>
          <div className="product-info">
            <div className="product-name">{element.name}</div>
            <div className="product-price">${element.price}</div>
            <div className="product-btn-wrapper">
              <button className="add-to-cart-btn">Add to cart</button>
              <button className="like-btn">
                <TbThumbUp className="thumbs-icon" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
