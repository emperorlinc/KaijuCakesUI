const Category = ({ category }) => {
  return (
    <div className="category-wrapper">
      <div className="category-label">Categories.</div>
      <div className="category-items">
        {category.map((element) => (
          <div key={element.id} className="category">
            {element.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
