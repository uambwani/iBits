import React from "react";
import "./Modal.css";

const Modal = (props) => {
  const { open, onClose, image, title, description } = props;

  if (open) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src={image} alt='/' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
