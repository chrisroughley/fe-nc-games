import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCategories } from '../utils/api';
import CategoryList from './CategoryList';
import ReviewsList from './ReviewsList';
import OrderSelector from './OrderSelector';
import Nav from './Nav';
import { getReviewsByCategory } from '../utils/api';

const CategoryReviews = ({
  reviews,
  setReviews,
  categories,
  setCategories,
  query,
  setQuery,
}) => {
  const { category } = useParams();
  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response);
    });
  }, []);

  useEffect(() => {
    getReviewsByCategory(category, query).then((response) => {
      setReviews(response);
    });
  }, [category, query]);

  return (
    <div>
      <Nav></Nav>
      <div className='list-banner'>
        <div className='page-header'>
          <div className='container'>
            <p className='page-title'>{category} Reviews</p>
          </div>
        </div>
      </div>
      <div class='category-nav'>
        <CategoryList
          categories={categories}
          category={category}
        ></CategoryList>
        {/* <h1>All Reviews</h1> */}
        <OrderSelector setQuery={setQuery}></OrderSelector>
      </div>
      {/* <CategoryList categories={categories} category={category}></CategoryList>
      <h1>{category} reviews</h1>
      <OrderSelector setQuery={setQuery} category={category}></OrderSelector> */}
      <ReviewsList reviews={reviews}></ReviewsList>
    </div>
  );
};

export default CategoryReviews;
