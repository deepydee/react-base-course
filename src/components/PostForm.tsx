import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

export interface PostInterface {
  id?: number;
  title: string;
  body: string;
}

export default function PostForm({
  create,
}: {
  create: (post: PostInterface) => void;
}) {
  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  const addPost = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };

    create(newPost);

    setPost({
      title: '',
      body: '',
    });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Post title"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Post description"
      />
      <MyButton onClick={addPost} type="submit">
        Add Post
      </MyButton>
    </form>
  );
}
