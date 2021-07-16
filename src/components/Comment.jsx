import { patchComment } from '../utils/api';
import { useState } from 'react';

const Comment = ({ comment }) => {
  const [newVote, setNewVote] = useState(0);

  const incVote = (event) => {
    setNewVote((currentVote) => currentVote + 1);
    event.target.disabled = true;
    patchComment(event.target.id).catch((err) => {
      alert('oops something went wrong');
      setNewVote(0);
      event.target.disabled = false;
    });
  };
  return (
    <div className='comment-box'>
      <h3 className='comment-content'>{comment.author}</h3>
      <p className='comment-content'>{comment.body}</p>
      <p className='comment-content comment-vote'>
        {comment.votes + newVote}
        <button
          id={comment.comment_id}
          onClick={(event) => {
            incVote(event);
          }}
        >
          vote
        </button>
      </p>
    </div>
  );
};

export default Comment;
