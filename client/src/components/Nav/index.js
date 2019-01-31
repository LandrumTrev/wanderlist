// Nav component
// top bar navigation buttons

import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Nav(props) {
  // console.log(props);

  return (
    <div>
      <div className="card-group flex-nowrap">
        <div className="card flex-fill m-0">
          <NavLink
            id="link-search-box"
            className="nav-link nav-item"
            to="/search"
            style={{ color: "#999", backgroundColor: "aliceblue" }}
            activeStyle={{ color: "aliceblue", backgroundColor: "#999" }}
          >
            <div className="card-body p-0">
              <h4 className="card-title mb-0 text-center">SEARCH</h4>
            </div>
          </NavLink>
        </div>

        {/* if isLoggedIn is set to true, then */}
        {props.loginStatus ? (
          <>
            <div className="card flex-fill m-0">
              <NavLink
                id="link-saved-box"
                className="nav-link nav-item"
                to="/saved"
                style={{ color: "#999", backgroundColor: "aliceblue" }}
                activeStyle={{ color: "aliceblue", backgroundColor: "#999" }}
              >
                <div className="card-body p-0">
                  <h4 className="card-title mb-0 text-center">SAVED</h4>
                </div>
              </NavLink>
            </div>

            <div className="card flex-fill m-0">
              <span id="link-logout-box" className="nav-link nav-item" onClick={props.logoutClick}>
                <div className="card-body p-0">
                  <h4 className="card-title mb-0 text-center">LOG OUT</h4>
                </div>
              </span>
            </div>
          </>
        ) : (
          <div className="card flex-fill m-0">
            <span id="link-login-box" className="nav-link nav-item" onClick={props.modalPops}>
              <div className="card-body p-0">
                <h4 className="card-title mb-0 text-center">LOG IN</h4>
              </div>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
