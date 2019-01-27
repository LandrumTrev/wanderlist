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
      email: "",
      password: "",
      isDeleted: false
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
    console.log(this.state);
    console.log("Nav component updated");
  }
  // ===================================================

  componentDidMount() {
    console.log(this.state);
    console.log("Nav component mounted");
  }
  // ===================================================

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log("name = " + name);
    // console.log("value = " + value);  
  };

  // ===================================================

  loginUser = event => {
    // console.log("user login!");
    event.preventDefault();
    this.validateUser({
      email: this.state.loginEmail,
      password: this.state.loginPassword
    });
    // alert("You may or may not have been logged in!");
    this.setState({ show: false });
  };

  createUser = event => {
    event.preventDefault();
    this.validateUser({
      email: this.state.loginEmail,
      password: this.state.loginPassword
    });
    // console.log("state = " + JSON.stringify(this.state));  
    // console.log("user create!");    
    // alert("You may or may not have had a new account created!");
    // alert(`${this.state.firstName}, ${this.state.lastName}, ${this.state.email}, ${this.state.password}`);
    this.setState({ show: false });
  };
  
  validateUser = query => {
    API.getUser(query)
      .then(res => {
        console.log("LOGIN: res = " + JSON.stringify(res));
        if (res.data.success) {
          console.log("in success handle");
          this.setState({ isLoggedIn: true, });
          this.setState({ loginMsg: res.data.message });
          window.localStorage.setItem("SMC_authkey", res.data.token);
          window.location.assign('/authenticated/main');
        } else {
          console.log("in failure handle");
          this.setState({ isLoggedIn: false });
          this.setState({ loginMsg: res.data.message });
          window.localStorage.setItem("SMC_authkey", "");
          window.location.assign('/login');
        }
        console.log("LOGIN: state = " + JSON.stringify(this.state));
      })
      .catch(err => console.log(err));
  };
  
  // ===================================================

  render() {
    return (
      <>
        <Modal 
          show={this.state.show} 
          handleClose={this.hideModal} 
          handleLogin={this.loginUser} 
          handleNewUser={this.createUser}>
          <div id="login-user-form">
          <form>
            <Input 
              value={this.state.email} 
              onChange={this.handleInputChange} 
              name="email" 
              placeholder="email (required)" />
            <Input 
              value={this.state.password} 
              onChange={this.handleInputChange} 
              name="password" 
              placeholder="password (required)" />
            <FormBtn 
              disabled={!(this.state.email && this.state.password)} 
              onClick={this.loginUser}>
              Log In
            </FormBtn>
          </form>
          </div>
          <div id="create-user-form">
            <form>
            <Input 
                value={this.state.firstName} 
                onChange={this.handleInputChange} 
                name="firstName" 
                placeholder="first name (required)" />
              <Input 
                value={this.state.lastName} 
                onChange={this.handleInputChange} 
                name="lastName" 
                placeholder="last name (required)" />
                <Input 
                value={this.state.email} 
                onChange={this.handleInputChange} 
                name="email" 
                placeholder="email (required)" />
              <Input 
                value={this.state.password} 
                onChange={this.handleInputChange} 
                name="password" 
                placeholder="password (required)" />
              <FormBtn 
                disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.password)} 
                onClick={this.createUser}>
                Create Account
              </FormBtn>
            </form>
          </div>
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
