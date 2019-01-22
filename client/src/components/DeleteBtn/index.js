// DeleteBtn component
// note style.css for DeleteBtn

import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
// {...props} is a placeholder for one prop: a click handler with _id of this book
// onClick={() => this.deleteBook(book._id)}
// but could be a whole bunch of props set in the parent
// properties that are the same for all buttons can be set here
function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;
