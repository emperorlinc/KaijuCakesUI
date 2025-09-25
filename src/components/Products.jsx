const Products = ({ product }) => {
  return (
    <div className="product-wrapper">
      {product.map((element) => (
        <div key={element.id} className="product">
          <div className="image-wrapper">
            <img src={element.image} alt="Image" />
          </div>
          <div className="product-info">
            <div className="product-name">{element.name}</div>
            <div className="product-price">${element.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
