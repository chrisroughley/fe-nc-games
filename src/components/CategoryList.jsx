import { Link } from 'react-router-dom';

const CategoryList = ({ categories, category: selectedCategory }) => {
  return (
    <div>
      <div className='container category-selector'>
        {categories.map((category) => {
          return (
            <Link
              key={category.slug}
              to={`/reviews/${category.slug}`}
              className='link category-link'
              style={{
                backgroundColor: category.slug === selectedCategory && 'teal',
              }}
            >
              {category.slug}
            </Link>
          );
        })}
        <Link
          to='/reviews'
          className='link category-link'
          style={{
            backgroundColor: undefined === selectedCategory && 'teal',
          }}
        >
          All reviews
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
