import { useEffect } from 'react';
import ReviewsList from './ReviewsList';
import CategoryList from './CategoryList';
import OrderSelector from './OrderSelector';
import Nav from './Nav';
import { getReviews, getCategories } from '../utils/api';

const AllReviews = ({
  reviews,
  setReviews,
  categories,
  setCategories,
  query,
  setQuery,
}) => {
  useEffect(() => {
    getReviews(query).then((response) => {
      setReviews(response);
    });
  }, [query]);
  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response);
    });
  }, []);

  return (
    <div>
      <Nav></Nav>
      <div className='list-banner'>
        <div className='page-header'>
          <div className='container'>
            <p className='page-title'>Games Reviews</p>
          </div>
        </div>
      </div>
      <div class='category-nav'>
        <CategoryList categories={categories}></CategoryList>
        <OrderSelector setQuery={setQuery}></OrderSelector>
      </div>

      <ReviewsList reviews={reviews}></ReviewsList>
    </div>
  );
};

export default AllReviews;
