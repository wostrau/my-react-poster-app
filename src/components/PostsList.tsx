import React from 'react';
import { PostType } from '../App';
import Post from './Post';
import classes from './PostsList.module.css';

const PostsList: React.FC<{ posts: PostType[] }> = (props) => {
  const { posts } = props;

  return (
    <ul className={classes.posts}>
      {posts.map((post) => (
        <Post key={post.id} name={post.author} text={post.body} />
      ))}
    </ul>
  );
};

export default PostsList;
