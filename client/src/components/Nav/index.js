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
    console.log("show: true");
  };

  hideModal = () => {
    this.setState({ show: false });
    console.log("show: false");
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
        <Modal show={this.state.show} handleClose={this.hideModal}>
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
