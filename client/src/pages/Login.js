// Login modal

import React, { Component } from "react";
// use a <Link> tag in place of <a href> to link to another page view with React Router
// import { Link } from "react-router-dom";

// import list object arrays for Countries/Regions and Feature types
// import ListRegions from "../utils/ListRegions";

// import single-component .js files
// import Header from "../components/Header";

// import multiple-component .js files
// import { Col, Row, Container } from "../components/Grid";
// import { CardsContainer, ResultCard, NoResultCard } from "../components/Cards";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

// import master style.css for all page views
import "./style.css";

// import API in order to make axios API calls to the Express Server
import API from "../utils/API";

// use axios to make XMLHttpRequest API calls
// import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: "",
      loginPassword: "",
      isLoggedIn: "",
      loginMsg: ""
    };
  }

  // ===================================================

  componentDidUpdate() {
    console.log("Login componentDidUpdate");
  }

  // ===================================================

  componentDidMount() {
    console.log("Login componentDidMount");
  }

  // ===================================================

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    console.log("name = " + name);
    console.log("value = " + value);
  };

  // ===================================================

  handleFormSubmit = event => {
    event.preventDefault();
    this.validateUser({
      email: this.state.loginEmail,
      password: this.state.loginPassword
    });
    console.log("state = " + JSON.stringify(this.state));
  };

  // ===================================================

  validateUser = query => {
    API.getUser(query)
      .then(res => {
        console.log("LOGIN: res = " + JSON.stringify(res));
        if (res.data.success) {
          console.log("in success handle");
          this.setState({ isLoggedIn: true });
          this.setState({ loginMsg: res.data.message });
          window.localStorage.setItem("RLT_authkey", res.data.token);
          // change this location to the logged in main page
          window.location.assign("/authenticated/main");
        } else {
          console.log("in failure handle");
          this.setState({ isLoggedIn: false });
          this.setState({ loginMsg: res.data.message });
          window.localStorage.setItem("RLT_authkey", "");
          window.location.assign("/login");
        }
        console.log("LOGIN: state = " + JSON.stringify(this.state));
      })
      .catch(err => console.log(err));
  };

  // ===================================================

  render() {
    return (
      <>
        {/* login modal code here */}
        {/* login modal code here */}
      </>
    );
  }
}

export default Login;
