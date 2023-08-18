/* eslint-disable no-return-assign */
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostForm, { PostInterface } from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './styles/App.css';

export function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Hello World', body: 'Lorem ipsum' },
    { id: 2, title: 'Hello World 2', body: 'Lorem ipsum' },
    { id: 3, title: 'Hello World 3', body: 'Lorem ipsum' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post: PostInterface) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="App">
        <PostForm create={createPost} />
        <PostList remove={removePost} posts={posts} title="Posts" />
      </div>
    </div>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
