const Category = ({ category, productCategory, getProducts }) => {
  return (
    <div className="category-wrapper">
      <div className="category-items">
        <div className="category" onClick={() => getProducts()}>
          All
        </div>
        {category.map((element) => (
          <div
            key={element.id}
            className="category"
            onClick={() => productCategory(element.id)}
          >
            {element.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
