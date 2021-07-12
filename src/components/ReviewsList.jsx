import { Link } from 'react-router-dom';

const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => {
        return (
          <li key={review.title}>
            <Link to={`/review/${review.review_id}`}>{review.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;
