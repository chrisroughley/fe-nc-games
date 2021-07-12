import { useState, useEffect } from 'react';
import { getReviewById, getReviewComments } from '../utils/api';
import { useParams } from 'react-router';
import Comments from './Comments';

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getReviewById(review_id).then((response) => {
      setReview(response);
    });
  }, []);
  useEffect(() => {
    getReviewComments(review_id).then((response) => {
      setComments(response);
    });
  }, []);
  return (
    <div>
      <h1>{review.title}</h1>
      <p>{review.review_body}</p>
      <Comments comments={comments}></Comments>
    </div>
  );
};

export default Review;
