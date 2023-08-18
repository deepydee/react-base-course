/* eslint-disable no-return-assign */
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addPost = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };

    setPosts([...posts, newPost]);
    setTitle('');
    setBody('');

    console.log(newPost);
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="App">
        <form>
          <MyInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Post title"
          />
          <MyInput
            value={body}
            onChange={(e) => setBody(e.target.value)}
            type="text"
            placeholder="Post description"
          />
          <MyButton onClick={addPost} type="submit">
            Add Post
          </MyButton>
        </form>
        <PostList posts={posts} title="Posts" />
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
