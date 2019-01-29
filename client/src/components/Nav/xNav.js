import React from "react";
import "./style.css";

function Nav(props) {
  // console.log(props);

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a id="link-search" className="nav-link" href="/">
          Search
        </a>
        {/* if isLoggedIn is set to true, then */}
        {props.loginStatus ? (
          <>
            <a id="link-saved" className="nav-link" href="/saved">
              Saved
            </a>
            <span id="link-logout" className="nav-link" onClick={props.logoutClick}>
              Log Out
            </span>
          </>
        ) : (
          <span id="link-login" className="nav-link" onClick={props.modalPops}>
            Log In
          </span>
        )}
        {/* if isLoggedIn is set to true, then */}
        {props.firstName ? <span id="link-username">{`Hey ${props.firstName}!`}</span> : <span />}
      </nav>
    </>
  );
}

export default Nav;
