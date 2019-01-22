// Nav component: placed in App.js with Router, appears on every page

import React from "react";

// creates a Bootstrap "navbar" component with a home page view link on logo
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <a className="navbar-brand" href="/">
        WanderList
      </a>
      <a className="float-right" href="/" style={{ color: "white"}}>
        login
      </a>
    </nav>
  );
}

export default Nav;
