import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="/">
        {/* <img src="assets/images/dinofii_logo.svg" style={{ width: "30", height: "30" }} className="d-inline-block align-top" alt="" /> */}
        Wanderlist
      </a>
      <a className="nav-link" href="/">
        Saved
      </a>
      <a className="nav-link" href="/">
        Login
      </a>
    </nav>
  );
}

export default Nav;
