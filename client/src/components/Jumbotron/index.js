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
        <h1 id="headline">
          WanderList
        </h1>
        <p id="subhead">NOT ALL THOSE WHO WANDER ARE LOST.</p>
        <p id="descriptor">
          Select a feature and choose an area to search. Wanderlist gives you a random point of interest and the closest city, as well as links to
          info, maps, directions, and local wifi.
        </p>
        {/* <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
      </div>

      {/* {children} */}
    </div>
  );
}

export default Jumbotron;
