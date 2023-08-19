/* eslint-disable no-return-assign */
import { useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostForm, { PostInterface } from './components/PostForm';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
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

  const [sortOption, setSortOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    console.log('SorterdPosts');

    if (sortOption) {
      return [...posts].sort((a, b) =>
        a[sortOption].localeCompare(b[sortOption])
      );
    }

    return posts;
  }, [sortOption, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
  }, [searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post: PostInterface) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (option: string) => {
    setSortOption(option);
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

        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />

        <MySelect
          value={sortOption}
          onChange={sortPosts}
          defaultValue="Sort by"
          options={[
            { value: 'title', name: 'By title' },
            { value: 'body', name: 'By description' },
          ]}
        />

        {sortedAndSearchedPosts.length ? (
          <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title="Posts"
          />
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
