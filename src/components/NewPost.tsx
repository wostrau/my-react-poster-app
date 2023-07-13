import React from 'react';

import classes from './NewPost.module.css';

const NewPost: React.FC = () => {
  const [enteredValue, setEnteredValue] = React.useState<string | null>(null);

  const changeBodyHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredValue(event.currentTarget.value);
  };

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{enteredValue}</p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input type='text' id='name' required />
      </p>
    </form>
  );
};

export default NewPost;
