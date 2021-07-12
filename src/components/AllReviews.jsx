import { useEffect } from 'react';
import ReviewsList from './ReviewsList';
import CategoryList from './CategoryList';
import { getReviews, getCategories } from '../utils/api';

const AllReviews = ({ reviews, setReviews, categories, setCategories }) => {
  useEffect(() => {
    getReviews().then((response) => {
      setReviews(response);
    });
  }, []);
  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response);
    });
  }, []);
  return (
    <div>
      <CategoryList categories={categories}></CategoryList>
      <h1>All Reviews</h1>
      <ReviewsList reviews={reviews}></ReviewsList>
    </div>
  );
};

export default AllReviews;
