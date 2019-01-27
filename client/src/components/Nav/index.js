import React, { Component } from "react";
import Modal from "../Modal";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
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

  loginUser = () => {
    console.log("user login!");
    this.setState({ show: false });
    alert("You may or may not have been logged in!");
  };

  createUser = () => {
    console.log("user create!");
    this.setState({ show: false });
    alert("You may or may not have had a new account created!");
  };

  // ===================================================

  componentDidUpdate() {
    console.log(this.state);
    console.log("Nav component updated");
  }
  // ===================================================

  componentDidMount() {
    console.log(this.state);
    console.log("Nav component mounted");
  }
  // ===================================================

  // ===================================================

  render() {
    return (
      <>
        <Modal show={this.state.show} handleClose={this.hideModal} handleLogin={this.loginUser} handleNewUser={this.createUser}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <a className="navbar-brand" href="/">
            {/* <img src="assets/images/dinofii_logo.svg" style={{ width: "30", height: "30" }} className="d-inline-block align-top" alt="" /> */}
            Wanderlist
          </a>
          <a className="nav-link" href="/">
            Saved
          </a>
          <button type="button" className="nav-link" onClick={this.showModal}>
            Login
          </button>
        </nav>
      </>
    );
  }
}

export default Nav;
