/* eslint-disable no-return-assign */
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostForm, { PostInterface } from './components/PostForm';
import PostList from './components/PostList';
import MySelect from './components/UI/select/MySelect';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './styles/App.css';

export function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Hello World',
      body: 'The multi-platinum pop icon, Enrique Iglesias is a global superstar recognized for his musical versatility across pop and urban genres in Spanish and',
    },
    {
      id: 2,
      title: 'Enrique Iglesias - слушать и скачать бесплатно',
      body: 'Enrique Miguel Iglesias Preysler; род. 8 мая 1975, Мадрид) — испанский певец, автор песен, продюсер и актёр. Иглесиас начинал свою карьеру под псевдонимом',
    },
    { id: 3, title: 'Все песни Enrique Iglesias', body: 'Lorem ipsum' },
  ]);

  const [sort, setSort] = useState('');

  const createPost = (newPost: PostInterface) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post: PostInterface) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (option: string) => {
    setSort(option);
    setPosts([...posts].sort((a, b) => a[option].localeCompare(b[option])));
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="App">
        <PostForm create={createPost} />
        <hr style={{ margin: '15px 0' }} />

        <MySelect
          value={sort}
          onChange={sortPosts}
          defaultValue="Sort by"
          options={[
            { value: 'title', name: 'By title' },
            { value: 'body', name: 'By description' },
          ]}
        />
        <div />
        {posts.length ? (
          <PostList remove={removePost} posts={posts} title="Posts" />
        ) : (
          <h2 style={{ textAlign: 'center' }}>No posts found</h2>
        )}
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
