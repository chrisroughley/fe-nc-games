import { UserContext } from '../user';
import { useContext, useState, useEffect } from 'react';
import { postComment, deleteComment, patchComment } from '../utils/api';
import Comment from './Comment';

const Comments = ({ comments, setComments, review_id }) => {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState('');
  const [newComment, setNewComment] = useState('');

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setComment(newComment);
  };
  const handleDelete = (commentId) => {
    setComments((currentComments) => {
      return currentComments.filter(
        (currentComment) => currentComment.comment_id !== commentId
      );
    });
    deleteComment(commentId);
  };

  useEffect(() => {
    if (comment.length > 0) {
      postComment(review_id, { username: user.username, body: comment }).then(
        (response) => {
          setComments((currentComments) => {
            return [...currentComments, response];
          });
          setNewComment('');
        }
      );
    }
  }, [comment]);

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {Array.isArray(comments) ? (
          comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <Comment comment={comment}></Comment>
                {user.username === comment.author && (
                  <button
                    onClick={() => {
                      handleDelete(comment.comment_id);
                    }}
                  >
                    REMOVE YOUR COMMENT
                  </button>
                )}
              </li>
            );
          })
        ) : (
          <p>Be the first to write a comment!</p>
        )}
      </ul>
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
    </div>
  );
};

export default Comments;
