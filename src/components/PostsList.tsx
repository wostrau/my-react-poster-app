import React, { ChangeEvent } from 'react';
import { PostType } from '../App';
import Post from './Post';
import classes from './PostsList.module.css';
import NewPost from './NewPost';

const PostsList: React.FC<{ posts: PostType[] }> = (props) => {
  const { posts } = props;

  const [enteredBody, setEnteredBody] = React.useState<string | null>(null);
  const [enteredAuthor, setEnteredAuthor] = React.useState<string | null>(null);

  const bodyChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredBody(event.currentTarget.value);
  };

  const authorChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAuthor(event.currentTarget.value);
  };

  return (
    <React.Fragment>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.id} name={post.author} text={post.body} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default PostsList;
