import React from 'react';
import classes from './Post.module.css';
import { Link } from 'react-router-dom';

const Post: React.FC<{ id: string; author: string; text: string }> = (
  props
) => {
  const { id, author, text } = props;

  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{text}</p>
      </Link>
    </li>
  );
};

export default Post;
