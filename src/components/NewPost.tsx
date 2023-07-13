import React, { ChangeEvent } from 'react';

import classes from './NewPost.module.css';

const NewPost: React.FC<{
  onBodyChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onAuthorChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onCancel: () => void;
}> = (props) => {
  const { onBodyChange, onAuthorChange, onCancel } = props;

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
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
