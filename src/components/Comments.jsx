const Comments = ({ comments }) => {
  console.log(comments);
  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {Array.isArray(comments) ? (
          comments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <h3>{comment.author}</h3>
                <p>{comment.body}</p>
              </li>
            );
          })
        ) : (
          <p>Be the first to write a comment!</p>
        )}
      </ul>
    </div>
  );
};

export default Comments;
