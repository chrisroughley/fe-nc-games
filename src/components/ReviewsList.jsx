const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => {
        return <li key={review.title}>{review.title}</li>;
      })}
    </ul>
  );
};

export default ReviewsList;
