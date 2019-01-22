import React from "react";

// This file exports the Input, TextArea, and FormBtn components

// returns a Bootstrap "form-group" <div> with a "form-control" <input>
// takes (props) that are assigned in parent (Books.js) that include parent state
// and are assigned to the <input> tag as <input {...props}>
export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

// returns a Bootstrap styled <textarea> for long text input (this.state.synopsis)
export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

// returns a <button> with Bootstrap classes, inline CSS, <button> tag props,
// and also can hold text between it's tags as {props.children} 
// could this also be just {children} if FormBtn({props, children}) ?
export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
