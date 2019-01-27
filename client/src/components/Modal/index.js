import React from "react";
import "./style.css";

const Modal = ({ handleClose, handleLogin, handleNewUser, show, children }) => {
  const showHideClassName = show ? "login-modal display-block" : "login-modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="login-modal-main">
        {children}
        <button className="btn btn-primary" onClick={handleClose}>close</button>
        <button className="btn btn-success" onClick={handleLogin}>login</button>
        <button className="btn btn-warning" onClick={handleNewUser}>new user</button>
      </section>
    </div>
  );
};

export default Modal;

{
  /* <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div> */
}

// {/* <div className={showHideClassName} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> */}
//   {/* <div className="modal-dialog" role="document"> */}
//   {/* <div className="modal-content"> */}
//   {/* <div className="modal-header">
//         <h5 className="modal-title" id="exampleModalLabel">
//           Log In or Create Account
//         </h5>
//         <button onClick={handleClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div> */}

//   {/* <div className="modal-body">
//         email and password fields for Log In
//         <button onClick={handleLogin} type="button" className="btn btn-primary" data-dismiss="modal">
//           Log In
//         </button>
//       </div> */}

//   {/* <div className="modal-footer">
//         firstname, lastname, and email and password fields for Log In
//         <button onClick={handleCreateAccount} type="button" className="btn btn-success" data-dismiss="modal">
//           Create Account
//         </button>
//       </div> */}
//   {/* </div> */}
//   {/* </div> */}
// {/* </div> */}
