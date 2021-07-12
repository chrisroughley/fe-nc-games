import { Link } from 'react-router-dom';

const CategoryList = ({ categories }) => {
  return (
    <div>
      {categories.map((category) => {
        return (
          <Link key={category.slug} to={`/reviews/${category.slug}`}>
            {' '}
            | {category.slug} |{' '}
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryList;
