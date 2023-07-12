import React, { useState } from 'react';
import Post from './components/Post';
import PostsList from './components/PostsList';

export type PostType = { id: string; author: string; body: string };

const App: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([
    { id: 'p1', author: 'Alex', body: 'I like coding everyday' },
    { id: 'p2', author: 'Marina', body: 'I like watching vlogs everyday' },
    { id: 'p3', author: 'Bjorn', body: 'I like sniffing poops everyday' },
    {
      id: 'p4',
      author: 'Max',
      body: 'I like doing educational content everyday',
    },
  ]);

  return (
    <main>
      <PostsList posts={posts} />
    </main>
  );
};

export default App;
