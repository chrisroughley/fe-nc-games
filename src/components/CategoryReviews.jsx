import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCategories } from '../utils/api';
import CategoryList from './CategoryList';
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

  //NOT WORKING FIX TOMORROW
  // useEffect(() => {
  //   getReviewsByCategory(category).then((response) => {
  //     setReviews(response);
  //   });
  // }, [category]);
  console.log(reviews);
  return (
    <div>
      <CategoryList categories={categories}></CategoryList>
      <h1>{category} reviews</h1>
    </div>
  );
};

export default CategoryReviews;
