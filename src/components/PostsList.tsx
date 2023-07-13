import React from 'react';
import { PostType } from '../App';
import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';

const PostsList: React.FC<{ posts: PostType[] }> = (props) => {
  const { posts } = props;

  return (
    <React.Fragment>
      <NewPost />
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.id} name={post.author} text={post.body} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default PostsList;
