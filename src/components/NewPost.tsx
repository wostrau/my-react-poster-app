import React, { ChangeEvent, FormEvent } from 'react';

import classes from './NewPost.module.css';

const NewPost: React.FC<{ onCancel: () => void }> = ({ onCancel }) => {
  const [enteredBody, setEnteredBody] = React.useState<string>('');
  const [enteredAuthor, setEnteredAuthor] = React.useState<string>('');

  const bodyChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredBody(event.currentTarget.value);
  };

  const authorChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAuthor(event.currentTarget.value);
    const postData = {
      author: enteredAuthor,
      body: enteredBody,
    };
    onCancel();
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea
          id='body'
          required
          rows={3}
          onChange={bodyChangeHandler}
          value={enteredBody}
        />
      </p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input
          type='text'
          id='name'
          required
          onChange={authorChangeHandler}
          value={enteredAuthor}
        />
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
