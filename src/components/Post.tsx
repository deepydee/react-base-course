import { PostInterface } from './PostForm';
import MyButton from './UI/button/MyButton';

/* eslint-disable react/destructuring-assignment */
function Post(props: {
  number: string;
  remove: (post: PostInterface) => void;
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
        <MyButton onClick={() => props.remove(props.post)} type="button">
          Remove
        </MyButton>
      </div>
    </div>
  );
}

export default Post;
