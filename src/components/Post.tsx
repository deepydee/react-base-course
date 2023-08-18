/* eslint-disable react/destructuring-assignment */
function Post(props: { post: { id: number; title: string; body: string } }) {
  const { id, title, body } = props.post;

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {id}. {title}
        </strong>
        <p>{body}</p>
      </div>
      <div className="post__bt">
        <button type="button">Remove</button>
      </div>
    </div>
  );
}

export default Post;
