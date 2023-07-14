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
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} name={post.author} text={post.body} />
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
