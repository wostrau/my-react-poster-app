import React from 'react';
import classes from './Modal.module.css';

const Modal: React.FC<{ children: React.ReactNode; onClose: () => void }> = (
  props
) => {
  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.onClose} />
      <dialog open={true} className={classes.modal}>
        {props.children}
      </dialog>
    </React.Fragment>
  );
};

export default Modal;
