import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCategories } from '../utils/api';
import CategoryList from './CategoryList';
import ReviewsList from './ReviewsList';
import { getReviewsByCategory } from '../utils/api';

const CategoryReviews = ({
  reviews,
  setReviews,
  categories,
  setCategories,
}) => {
  const { category } = useParams();
  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response);
    });
  }, []);

  useEffect(() => {
    getReviewsByCategory(category).then((response) => {
      setReviews(response);
    });
  }, [category]);

  return (
    <div>
      <CategoryList categories={categories}></CategoryList>
      <h1>{category} reviews</h1>
      <ReviewsList reviews={reviews}></ReviewsList>
    </div>
  );
};

export default CategoryReviews;
