import React from 'react';
import Post from './Post';
import classes from './PostsList.module.css';
import { useLoaderData } from 'react-router-dom';

export type PostType = { id: string; author: string; body: string };

const PostsList: React.FC = () => {
  const posts = useLoaderData() as PostType[];

  return (
    <React.Fragment>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              text={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet!</h2>
          <p>Start adding something!</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default PostsList;
