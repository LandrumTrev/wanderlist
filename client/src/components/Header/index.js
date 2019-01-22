// Header component

import React from "react";

// returns a Bootstrap "jumbotron" class <div> with inline CSS
// has a {children} param so other components can exist within its open and close tags
function Header({ children }) {
  return (
    <div
      style={{ height: 250, clear: "both", paddingTop: 100, textAlign: "center" }}
      className="jumbotron px-0 mx-0"
    >
      {children}
    </div>
  );
}

export default Header;
