import React from 'react';
import PostsList, { PostType } from '../components/PostsList';
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

export const loader = async () => {
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts as PostType[];
};
