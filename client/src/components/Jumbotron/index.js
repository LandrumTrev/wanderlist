// Jumbotron component
// Displays logo, subhead, and descriptor and gradient background
// styles are in master styles: pages/style.css 

import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div id="jumbohead" className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 id="headline">WanderList</h1>
        <p id="subhead">NOT ALL THOSE WHO WANDER ARE LOST.</p>
        <p id="descriptor">{/* css ::after placed content */}</p>
      </div>
    </div>
  );
}

export default Jumbotron;
