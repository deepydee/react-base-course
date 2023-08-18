/* eslint-disable react/destructuring-assignment */
function Post(props: {
  number: string;
  post: { id: number; title: string; body: string };
}) {
  const { title, body } = props.post;

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {title}
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
