import { useContext } from 'react';
import { UserContext } from '../user';
import { Link } from 'react-router-dom';

const MakeComment = ({ setComment, setNewComment, newComment }) => {
  const { user } = useContext(UserContext);

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setComment(newComment);
  };
  return (
    <div>
      {user.username ? (
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <label htmlFor='comment'>Comment on this review: </label>
          <input
            type='text'
            name='comment'
            value={newComment}
            onChange={(event) => {
              handleChange(event);
            }}
          />
          <button>Submit</button>
        </form>
      ) : (
        <p>
          You must be signed in to comment on this review.
          <Link to='/users'>Sign in.</Link>
        </p>
      )}
    </div>
  );
};

export default MakeComment;

// {
//   user.username ? (
//     <Comments
//       comments={comments}
//       setComments={setComments}
//       review_id={review_id}
//     ></Comments>
//   ) : (
//     <p>
//       You must be signed in to view comments.
//       <Link to='/users'>Sign in.</Link>
//     </p>
//   );
// }
