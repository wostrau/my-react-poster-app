import React from 'react';
import { PostType } from '../App';
import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';

const PostsList: React.FC<{
  posts: PostType[];
  isPosting: boolean;
  onStopPosting: () => void;
}> = ({ posts, isPosting, onStopPosting }) => {
  return (
    <React.Fragment>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.id} name={post.author} text={post.body} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default PostsList;
