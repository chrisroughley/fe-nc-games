import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../user';
import { getReviewById, getReviewComments, patchReview } from '../utils/api';
import { useParams } from 'react-router';
import Comments from './Comments';
import { Link } from 'react-router-dom';

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  const [newVote, setNewVote] = useState(0);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getReviewById(review_id).then((response) => {
      setReview(response);
    });
  }, []);
  useEffect(() => {
    getReviewComments(review_id).then((response) => {
      if (Array.isArray(response)) {
        setComments(response);
      }
    });
  }, []);

  const incVotes = (reviewId) => {
    setNewVote((currentVotes) => currentVotes + 1);
    patchReview(reviewId).catch((err) => {
      alert('oops something went wrong');
      setNewVote(0);
    });
  };
  return (
    <div className='review-page'>
      <h1>{review.title}</h1>
      <p>{review.review_body}</p>
      <p>
        votes: {review.votes + newVote}
        <button
          disabled={newVote > 0}
          onClick={() => {
            incVotes(review.review_id);
          }}
        >
          vote
        </button>{' '}
        comments: {comments.length}
      </p>

      <Comments
        comments={comments}
        setComments={setComments}
        review_id={review_id}
      ></Comments>
    </div>
  );
};

export default Review;
