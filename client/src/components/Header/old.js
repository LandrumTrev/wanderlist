// Header component

import React from "react";
import "./style.css";

// returns a Bootstrap "jumbotron" class <div> with inline CSS
// has a {children} param so other components can exist within its open and close tags
function Header({ children }) {
  return (
    <div style={{ clear: "both", paddingTop: 20, textAlign: "center", backgroundColor: "#eee" }} className="px-0 mx-0">
      {children}
    </div>
  );
}

export default Header;
