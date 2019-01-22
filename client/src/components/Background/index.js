// Background component

import React from "react";
import "./style.css";

// returns a Bootstrap "jumbotron" class <div> with inline CSS
// has a {children} param so other components can exist within its open and close tags
function Background({ children }) {
  return <div id="photo">{children}</div>;
}

export default Background;
