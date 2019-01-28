import React, { Component } from "react";
import Modal from "../Modal";
import { Input, FormBtn } from "../Form";
import API from "../../utils/API";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      firstName: "",
      lastName: "",
      newEmail: "",
      newPassword: "",
      email: "",
      password: "",
      isDeleted: false,
      isLoggedIn: false,
      loginMsg: ""
    };
  }

  // ===================================================

  showModal = () => {
    this.setState({ show: true });
    // console.log("show: true");
  };

  hideModal = () => {
    this.setState({ show: false });
    // console.log("show: false");
  };

  // ===================================================

  componentDidUpdate() {
    // console.log("Nav component updated with this state:");
    // console.log(this.state);
    // console.log(`this.state.email: ${this.state.email}`);
  }
  // ===================================================

  componentDidMount() {
    // console.log("Nav component mounted with this state:");
    // console.log(this.state);
    // get the current value of the Wanderlist_authkey token in local storage
    let readToken = window.localStorage.getItem("Wanderlist_authkey");
    // set the key and value of the query for token
    let query = {
      token: readToken
    };
    // calls the verify() method in the loginController
    API.checkAuth(query)
      .then(res => {
        if (res.data.success) {
          this.setState({ isLoggedIn: true });
        } else {
          this.setState({ isLoggedIn: false });
        }
        // console.log(`this.state.isLoggedIn is set to: ${this.state.isLoggedIn}`);
        // console.log(this.state);
      })
      .catch(err => console.log(err));
  }

  // ===================================================

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // ===================================================

  loginUser = event => {
    // console.log("user login!");
    event.preventDefault();
    this.validateUser({
      email: this.state.email.trim(),
      password: this.state.password.trim()
    });
    this.setState({ show: false });
  };

  validateUser = query => {
    // getUser calls /api/signin route to log in existing user
    // console.log("this is the (query) to validateUser():");
    console.log(query);
    API.getUser(query)
      .then(res => {
        if (res.data.success) {
          console.log("user login successfully validated.");
          this.setState({ isLoggedIn: true });
          this.setState({ loginMsg: res.data.message });
          window.localStorage.setItem("Wanderlist_authkey", res.data.token);
          // window.location.assign("/");
        } else {
          console.log("user login validation failed.");
          this.setState({ isLoggedIn: false });
          this.setState({ loginMsg: res.data.message });
          window.localStorage.setItem("Wanderlist_authkey", "");
          // window.location.assign("/login");
        }
      })
      .catch(err => console.log(err));
  };

  // ===================================================

  createUser = event => {
    event.preventDefault();
    this.makeNewUser({
      firstName: this.state.firstName.trim(),
      lastName: this.state.lastName.trim(),
      email: this.state.newEmail.trim(),
      password: this.state.newPassword.trim()
    });
    this.setState({ show: false });
  };

  makeNewUser = query => {
    // createUser calls /api/signup route to create a new user
    // (query) is an object entered firstName, lastName, email and password
    // console.log("this is the (query) to makeNewUser():");
    // console.log(query);
    API.createUser(query)
      .then(res => {
        // console.log("SIGNUP: res = " + JSON.stringify(res));
        if (res.data.success) {
          console.log("new user create success!");
          // code to execute on successful creation of new user
        } else {
          console.log("failed to create new user.");
          // code to execute on failed creation of new user
        }
      })
      .catch(err => console.log(err));
  };

  // ===================================================

  handleUserLogout = event => {
    event.preventDefault();
    // get the current value of the Wanderlist_authkey token in local storage
    let readToken = window.localStorage.getItem("Wanderlist_authkey");
    // set the key and value of the query for token
    let query = {
      token: readToken
    };
    // calls the verify() method in the loginController
    API.logOut(query)
      .then(res => {
        if (res.data.success) {
          this.setState({ isLoggedIn: false });
          window.localStorage.removeItem("Wanderlist_authkey");
          console.log("user successfully logged out.");
          // window.location.assign("/logged_out");
        } else {
          // this.setState({ isLoggedIn: true });
          console.log("user log out failed, user is still logged in.");
          // window.location.assign("/still_logged_in");
        }
        // console.log(`this.state.isLoggedIn is set to: ${this.state.isLoggedIn}`);
        // console.log(this.state);
      })
      .catch(err => console.log(err));
  };

  // ===================================================

  render() {
    return (
      <>
        <Modal show={this.state.show} handleClose={this.hideModal} handleLogin={this.loginUser} handleNewUser={this.createUser}>
          <div id="login-user-form">
            <form>
              <Input value={this.state.email} onChange={this.handleInputChange} name="email" placeholder="email (required)" />
              <Input value={this.state.password} onChange={this.handleInputChange} name="password" placeholder="password (required)" />
              <FormBtn disabled={!(this.state.email && this.state.password)} onClick={this.loginUser}>
                Log In
              </FormBtn>
            </form>
          </div>
          <div id="create-user-form">
            <form>
              <Input value={this.state.firstName} onChange={this.handleInputChange} name="firstName" placeholder="first name (required)" />
              <Input value={this.state.lastName} onChange={this.handleInputChange} name="lastName" placeholder="last name (required)" />
              <Input value={this.state.newEmail} onChange={this.handleInputChange} name="newEmail" placeholder="email (required)" />
              <Input value={this.state.newPassword} onChange={this.handleInputChange} name="newPassword" placeholder="password (required)" />
              <FormBtn
                disabled={!(this.state.firstName && this.state.lastName && this.state.newEmail && this.state.newPassword)}
                onClick={this.createUser}
              >
                Create Account
              </FormBtn>
            </form>
          </div>
        </Modal>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          {/* <a className="navbar-brand" href="/"> */}
            {/* <img src="assets/images/dinofii_logo.svg" style={{ width: "30", height: "30" }} className="d-inline-block align-top" alt="" /> */}
            {/* Wanderlist */}
          {/* </a> */}
          <a id="link-search" className="nav-link" href="/">
            Search
          </a>
          <a id="link-saved" className="nav-link" href="/saved">
            Saved
          </a>
          {/* if isLoggedIn is set to true, then */}
          {this.state.isLoggedIn ? (
            <span id="link-logout" className="nav-link" onClick={this.handleUserLogout}>
              Log Out
            </span>
          ) : (
            <span id="link-login" className="nav-link" onClick={this.showModal}>
              Log In
            </span>
          )}
          {/* if isLoggedIn is set to true, then */}
          {this.state.firstName ? <span id="link-username">{`Hey ${this.state.firstName}!`}</span> : <span />}
        </nav>
      </>
    );
  }
}

export default Nav;
