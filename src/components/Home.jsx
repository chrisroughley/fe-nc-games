import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getCategories } from '../utils/api';

const Home = ({ categories, setCategories }) => {
  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response);
    });
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <Link to='/reviews'>Reviews link</Link>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.slug}>
              <Link to={`/reviews/${category.slug}`}>{category.slug}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
