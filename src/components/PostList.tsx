import Post from './Post';

export default function PostList({ posts, title, remove }) {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post, index) => (
        <Post remove={remove} key={post.id} number={index + 1} post={post} />
      ))}
    </div>
  );
}
