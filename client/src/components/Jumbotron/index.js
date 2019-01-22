import React from "react";

// returns a Bootstrap "jumbotron" class <div> with inline CSS
// has a {children} param so other components can exist within its open and close tags
function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
