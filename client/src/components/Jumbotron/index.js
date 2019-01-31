import React from "react";
// import "./style.css";

// function Jumbotron({ children }) {
function Jumbotron() {
  return (
    <div
      // style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      id="jumbohead"
      className="jumbotron jumbotron-fluid"
    >
      <div className="container">
        <h1 id="headline">WanderList</h1>
        <p id="subhead">NOT ALL THOSE WHO WANDER ARE LOST.</p>
        <p id="descriptor">{/* css ::after placed content */}</p>
      </div>

      {/* {children} */}
    </div>
  );
}

export default Jumbotron;
