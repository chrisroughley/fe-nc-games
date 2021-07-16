import { UserContext } from '../user';
import { useContext, useState, useEffect } from 'react';
import { postComment, deleteComment } from '../utils/api';
import Comment from './Comment';
import MakeComment from './MakeComment';

const Comments = ({ comments, setComments, review_id, commentsNumber }) => {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState('');
  const [newComment, setNewComment] = useState('');

  const handleDelete = (commentId) => {
    const check = window.confirm(
      'are you sure you want to delete this comment?'
    );
    if (check) {
      deleteComment(commentId)
        .then(() => {
          setComments((currentComments) => {
            return currentComments.filter(
              (currentComment) => currentComment.comment_id !== commentId
            );
          });
        })
        .catch((err) => {
          alert('oops something went wrong');
        });
    }
  };

  useEffect(() => {
    console.log('test:' + comment);
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
      <h2>Comments: {commentsNumber}</h2>
      <ul>
        {Array.isArray(comments) ? (
          comments.map((comment) => {
            return (
              <li key={comment.comment_id} className='comment-list'>
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
      <MakeComment
        setComment={setComment}
        setNewComment={setNewComment}
        newComment={newComment}
      ></MakeComment>
    </div>
  );
};

export default Comments;
