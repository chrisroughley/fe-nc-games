import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getCategories } from '../utils/api';
import Nav from './Nav';
import CategoryCarousel from './CategoryCarousel';

const Home = ({ categories, setCategories }) => {
  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response);
    });
  }, []);
  return (
    <div className='home-img'>
      <Nav></Nav>
      <div className='section hero-section'>
        <div className='container'>
          <h1 className='home-title'>NC Games Reviews.</h1>
          <h2 className='home-second-title'>
            A review site for the latin speaking board game connoisseur
          </h2>
          <Link to='/reviews' className='reviews-link'>
            View Reviews
          </Link>
        </div>
      </div>
      {/* <CategoryCarousel
        categories={categories}
        setCategories={setCategories}
      ></CategoryCarousel> */}
      <div className='carousel container'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='80'
          height='80'
          viewBox='0 0 24 24'
        >
          <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
        </svg>
        <ul className='category-list'>
          {categories.map((category) => {
            return (
              <li key={category.slug} className='category'>
                <Link to={`/reviews/${category.slug}`} className='link'>
                  <div className='category-img'>{category.slug}</div>
                </Link>
              </li>
            );
          })}
        </ul>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='80'
          height='80'
          viewBox='0 0 24 24'
        >
          <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
        </svg>
      </div>
    </div>
  );
};

export default Home;
