import React, { ChangeEvent } from 'react';
import { PostType } from '../App';
import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';

const PostsList: React.FC<{ posts: PostType[] }> = ({ posts }) => {
  const [modalIsVisible, setModalIsVisible] = React.useState(true);
  const [enteredBody, setEnteredBody] = React.useState<string | null>(null);
  const [enteredAuthor, setEnteredAuthor] = React.useState<string | null>(null);

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  const bodyChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredBody(event.currentTarget.value);
  };

  const authorChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAuthor(event.currentTarget.value);
  };

  return (
    <React.Fragment>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
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
