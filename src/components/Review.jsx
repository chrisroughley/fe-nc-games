import { useState, useEffect } from 'react';
import { getReviewById } from '../utils/api';
import { useParams } from 'react-router';

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  useEffect(() => {
    getReviewById(review_id).then((response) => {
      setReview(response);
    });
  }, []);
  return (
    <div>
      <h1>{review.title}</h1>
      <p>{review.review_body}x</p>
    </div>
  );
};

export default Review;
