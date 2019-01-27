import React from "react";
import "./style.css";

const Modal = ({ handleClose, handleLogin, handleNewUser, show, children }) => {
  const showHideClassName = show ? "login-modal display-block" : "login-modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="login-modal-main">
        {children}
      </section>
    </div>
  );
};

export default Modal;