import React, { ReactNode } from 'react';
import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

const Modal: React.FC<{ children: ReactNode }> = (props) => {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate('..');
  };

  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open={true} className={classes.modal}>
        {props.children}
      </dialog>
    </React.Fragment>
  );
};

export default Modal;
