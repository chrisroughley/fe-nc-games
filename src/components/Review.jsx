import { useState, useEffect } from 'react';
import { getReviewById, getReviewComments, patchReview } from '../utils/api';
import { useParams } from 'react-router';
import Comments from './Comments';
import Nav from './Nav';

const Review = () => {
  const { review_id } = useParams();
  const [review, setReview] = useState({});
  const [comments, setComments] = useState([]);
  const [newVote, setNewVote] = useState(0);

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
  console.log(review.review_img_url);
  return (
    <div className='review-page'>
      <Nav></Nav>

      <div
        className='list-banner'
        style={{ backgroundImage: `url(${review.review_img_url})` }}
      >
        <div className='page-header'>
          <div className='container review-header'>
            <h2 className='page-title'>{review.title}</h2>
            <div className='review-like'>
              <button
                disabled={newVote > 0}
                onClick={() => {
                  incVotes(review.review_id);
                }}
                className='like-button'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  fill='#ffffff'
                  viewBox='0 0 24 24'
                >
                  <path d='M15.43 8.814c.808-3.283 1.252-8.814-2.197-8.814-1.861 0-2.35 1.668-2.833 3.329-1.971 6.788-5.314 7.342-8.4 7.743v9.928c3.503 0 5.584.729 8.169 1.842 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.649-1.168-2.446-2.594-2.507-1.21-.051-2.87-.277-3.976-.743zm3.718 4.321l-1.394.167s-.609 1.109.141 1.115c0 0 .201.01 1.069-.027 1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.238-.965-4.437-1.934-6.958-2.006v-6c3.263-.749 6.329-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.025 1.455-.051 1.585z' />
                </svg>
              </button>
              {review.votes + newVote}
            </div>
          </div>
        </div>
      </div>
      <div className='container review-content'>
        <p>{review.review_body}</p>

        <Comments
          comments={comments}
          setComments={setComments}
          review_id={review_id}
          commentsNumber={comments.length}
        ></Comments>
      </div>
    </div>
  );
};

export default Review;
