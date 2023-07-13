import React, { useState } from 'react';
import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';

export type PostType = { id: string; author: string; body: string };
type PostsListPropsType = { isPosting: boolean; onStopPosting: () => void };

const PostsList: React.FC<PostsListPropsType> = (props) => {
  const { isPosting, onStopPosting } = props;
  const [posts, setPosts] = useState<PostType[]>([]);

  const addPostHandler = (postData: { author: string; body: string }) => {
    const { author, body } = postData;
    const newPost: PostType = { id: new Date().toString(), author, body };
    setPosts((existingPosts) => [newPost, ...existingPosts]);
  };

  return (
    <React.Fragment>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
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
