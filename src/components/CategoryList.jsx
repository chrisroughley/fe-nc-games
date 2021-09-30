import { Link } from "react-router-dom";
import OrderSelector from "./OrderSelector";

const CategoryList = ({ categories, category: selectedCategory, setQuery }) => {
  return (
    <div>
      <div className="category-container category-selector">
        {categories.map((category) => {
          return (
            <Link
              key={category.slug}
              to={`/reviews/${category.slug}`}
              className="link category-link"
              style={{
                backgroundColor: category.slug === selectedCategory && "teal",
              }}
            >
              {category.slug}
            </Link>
          );
        })}
        <Link
          to="/reviews"
          className="link category-link"
          style={{
            backgroundColor: undefined === selectedCategory && "teal",
          }}
        >
          All reviews
        </Link>
      </div>
      <OrderSelector setQuery={setQuery}></OrderSelector>
    </div>
  );
};

export default CategoryList;
