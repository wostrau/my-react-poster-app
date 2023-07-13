import React, { ChangeEvent } from 'react';

import classes from './NewPost.module.css';

const NewPost: React.FC<{
  onBodyChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onAuthorChange: (event: ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
  const { onBodyChange, onAuthorChange } = props;

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' required onChange={onAuthorChange} />
      </p>
    </form>
  );
};

export default NewPost;
