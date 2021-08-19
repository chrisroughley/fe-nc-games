import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../utils/api';

const CategoryCarousel = ({ categories, setCategories }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getCategories().then((response) => {
      setIsLoading(() => false);
      setCategories(response);
    });
  }, []);
  if (isLoading) return <p style={{ color: 'white' }}>Loading...</p>;
  return (
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
  );
};

export default CategoryCarousel;
