import React from 'react';
import PostsList from '../components/PostsList';
import { Outlet } from 'react-router-dom';

const Posts: React.FC = () => {
  return (
    <React.Fragment>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </React.Fragment>
  );
};

export default Posts;
