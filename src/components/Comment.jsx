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
    <div>
      <h3>
        {comment.author}:{comment.comment_id}
      </h3>
      <p>{comment.body}</p>
      <p>
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
