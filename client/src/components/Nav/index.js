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
          window.location.assign("/login");
        }
        console.log(`this.state.isLoggedIn is set to: ${this.state.isLoggedIn}`);
        console.log(this.state);
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
    console.log("user login!");
    event.preventDefault();
    this.validateUser({
      email: this.state.email,
      password: this.state.password
    });
    // alert("You may or may not have been logged in!");
    this.setState({ show: false });
  };

  validateUser = query => {
    // getUser calls /api/signin route to log in existing user
    console.log("this is the (query) to validateUser():");
    console.log(query);
    API.getUser(query)
      .then(res => {
        console.log("LOGIN: res = " + JSON.stringify(res));
        if (res.data.success) {
          console.log("in success handle");
          this.setState({ isLoggedIn: true });
          this.setState({ loginMsg: res.data.message });
          window.localStorage.setItem("Wanderlist_authkey", res.data.token);
          window.location.assign("/");
          // console.log(`${this.state.isLoggedIn}, ${this.state.loginMsg}, ${this.state.email}, ${this.state.password}`);
        } else {
          console.log("in failure handle");
          this.setState({ isLoggedIn: false });
          this.setState({ loginMsg: res.data.message });
          window.localStorage.setItem("Wanderlist_authkey", "");
          window.location.assign("/login");
          // console.log(`${this.state.isLoggedIn}, ${this.state.loginMsg}, ${this.state.email}, ${this.state.password}`);
        }
        console.log("LOGIN: state = " + JSON.stringify(this.state));
      })
      .catch(err => console.log(err));
  };

  // ===================================================

  createUser = event => {
    // console.log("start creating user!");
    event.preventDefault();
    // console.log(`${this.state.firstName}, ${this.state.lastName}, ${this.state.newEmail}, ${this.state.newPassword}`);
    this.makeNewUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.newEmail,
      password: this.state.newPassword
    });
    // console.log("state = " + JSON.stringify(this.state));
    // alert("You may or may not have had a new account created!");
    this.setState({ show: false });
  };

  makeNewUser = query => {
    // createUser calls /api/signup route to create a new user
    // (query) is an object entered firstName, lastName, email and password
    console.log("this is the (query) to makeNewUser():");
    console.log(query);
    API.createUser(query)
      .then(res => {
        console.log("SIGNUP: res = " + JSON.stringify(res));
        if (res.data.success) {
          console.log("in success handle");
          //       this.setState({ isLoggedIn: true });
          //       this.setState({ loginMsg: res.data.message });
          //       // set Wanderlist_authkey key in Local Storage, value is token
          //       window.localStorage.setItem("Wanderlist_authkey", res.data.token);
          //       // then send user to /authenticated/main page view
          //       window.location.assign("/authenticated/main");
        } else {
          console.log("in failure handle");
          //       this.setState({ isLoggedIn: false });
          //       this.setState({ loginMsg: res.data.message });
          //       // set Wanderlist_authkey key in Local Storage, value is empty (false)
          //       window.localStorage.setItem("Wanderlist_authkey", "");
          //       // then send user to /login page view
          //       window.location.assign("/login");
        }
        //     console.log("LOGIN: state = " + JSON.stringify(this.state));
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
          <a className="navbar-brand" href="/">
            {/* <img src="assets/images/dinofii_logo.svg" style={{ width: "30", height: "30" }} className="d-inline-block align-top" alt="" /> */}
            Wanderlist
          </a>
          <a className="nav-link" href="/">
            Saved
          </a>

          {/* {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}

          <button type="button" className="nav-link" onClick={this.showModal}>
            Login
          </button>

          <a className="nav-link" href="/">
            <span>{`Hi ${this.state.firstName} username`}</span>
          </a>
        </nav>
      </>
    );
  }
}

export default Nav;
