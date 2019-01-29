// Saved page is the saved features page view and is only available to logged in users

import React, { Component } from "react";

// import list arrays for Country+Region and Feature Type <select> menus
// import ListRegions from "../utils/ListRegions";
// import ListFeatures from "../utils/ListFeatures";

// import single-component .js files
import Header from "../components/Header";
import Background from "../components/Background";
import Nav from "../components/Nav";
import Modal from "../components/Modal";

// import multiple-component .js files
// import { SelectRegion, SelectFeature } from "../components/Search";
// import { CardsContainer, ResultCard, NoResultCard } from "../components/Cards";
import { CardSavedContainer, CardSaved } from "../components/CardSaved";
// import { Container } from "../components/Grid";
import { Col, Row } from "../components/Grid";
import { List } from "../components/List";
import { Input, FormBtn } from "../components/Form";

// import master style.css for all page views
import "./style.css";

// import API in order to make axios API calls to the Express Server
import API from "../utils/API";

// use axios to make XMLHttpRequest API calls
// import axios from "axios";

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedPlaces: [],
      // placesArray: [],
      // listRegions: ListRegions.countryArray,
      // listFeatures: ListFeatures.featureArray,
      show: false,
      firstName: "",
      lastName: "",
      newEmail: "",
      newPassword: "",
      email: "",
      password: "",
      isDeleted: false,
      isLoggedIn: false,
      loginMsg: "",
      // countryAndRegion: "",
      // countryCC: "",
      // regionCC: "",
      // featureCode: "",
      // featureName: "",
      // featureType: "",
      // featureCountryCode: "",
      // featureLatitude: "",
      // featureLongitude: "",
      // featureLocation: "",
      // featureCountryName: "",
      // nearPlaceName: "",
      // nearPlacePostalCode: "",
      // nearPlaceCountryCode: "",
      // nearPlaceCountryName: "",
      // nearPlaceDistance: "",
      // nearPlaceLatLong: "",
      // nearPlaceWifi: "wifi map"
    };
  }

  // ===================================================
  // ===================================================
  // LOAD USER'S SAVED PLACES
  // ===================================================
  // ===================================================

  loadUserPlaces = () => {
    API.findSaved()
      .then(res => {
        // console.log(res.data);
        if (res.status === 200) {
          let usersArray = [];
          for (let j = 0; j < res.data.length; j++) {
            const place = res.data[j];
            if (place.email === this.state.email) {
              usersArray.push(place);
            }
          }
          this.setState({ savedPlaces: usersArray });
          console.log("user's saved places retrieved!");
        } else {
          console.log("failed retrieve user's saved places.");
        }
      })
      .catch(err => console.log(err));
  };

  // ===================================================

  // event handler for delete button located on each saved feature
  // finds that CardSaved data object in db "places" collection
  // and deletes feature object from db places collection, which is tagged with user's email
  handleDeletePlace = pKey => {
    console.log("Delete place button clicked!");
    // console.log(pKey);

    // get all currently displayed feature objects data, which are in placesArray
    let savedPlacesArray = this.state.savedPlaces;
    // console.log(currentPlaces);

    // loop through all current features in this.state.placesArray
    for (let i = 0; i < savedPlacesArray.length; i++) {
      // variable for each feature object looped
      const deleteObject = savedPlacesArray[i];

      // if a feature object's placeKey matches the placeKey passed by the save button,
      if (deleteObject.placeKey === pKey) {
        console.log(deleteObject.placeKey);

        let query = { placeKey: deleteObject.placeKey };
        console.log(query);

        API.deletePlace(query)
          .then(res => {
            // console.log(res.status);
            if (res.status === 200) {
              console.log("place deleted!");
              this.loadUserPlaces();
            } else {
              console.log("failed to delete this place.");
            }
          })
          .catch(err => console.log(err));
      }
    }
  };

  // ===================================================
  // ===================================================
  // AUTHENTICATION METHODS
  // ===================================================
  // ===================================================

  componentDidUpdate() {
    // this.loadUserPlaces();
    // console.log(`<Saved> component updated with this state:`);
    console.log(this.state);
    // console.log(`<Saved> DidUpdate this.state.isLoggedIn: ${this.state.isLoggedIn}`);
    // console.log(`<Saved> DidUpdate this.state.email: ${this.state.email}`);
  }
  // ===================================================

  componentDidMount() {
    // console.log(`<Saved> component mounted with this state:`);
    console.log(this.state);
    // get the current value of the Wanderlist_authkey and userEmail tokens in local storage
    let readToken = window.localStorage.getItem("Wanderlist_authkey");
    let readEmail = window.localStorage.getItem("Wanderlist_userEmail");
    // set the key and value of the query for Wanderlist_authkey token
    let query = {
      token: readToken
    };
    // calls the verify() method in the loginController
    API.checkAuth(query)
      .then(res => {
        if (res.data.success) {
          // set this.state.email based on the userEmail token in local storage
          this.setState({ email: readEmail });
          this.setState({ isLoggedIn: true });
        } else {
          this.setState({ isLoggedIn: false });
        }
        // console.log(`<Saved> DidMount this.state.isLoggedIn: ${this.state.isLoggedIn}`);
        // console.log(`<Saved> DidMount this.state.email: ${this.state.email}`);
        this.loadUserPlaces();
      })
      .catch(err => console.log(err));
  }

  // ===================================================

  // send realtime data input values to this.state.xxx
  handleInputChange = event => {
    // destructured name and value for event.target.name and event.target.value
    const { name, value } = event.target;
    // use name="" value of an input to change an identical key name in this.state
    // break single countryAndRegion value into it's countryCC and regionCC pieces
    if (name === "countryAndRegion") {
      this.setState({
        [name]: value,
        countryCC: value.substring(0, 2),
        regionCC: value.substring(2, 4)
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  };

  // ===================================================
  // ===================================================
  // ===================================================

  showModal = () => {
    this.setState({ show: true });
    // console.log(`showModal() this.state.show: ${this.state.show}`);
  };

  hideModal = () => {
    this.setState({ show: false });
    // console.log(`hideModal() this.state.show: ${this.state.show}`);
  };

  // ===================================================

  // handle the user login button event
  loginUser = event => {
    event.preventDefault();
    this.validateUser({
      email: this.state.email.trim(),
      password: this.state.password.trim()
    });
    this.setState({ show: false });
  };

  // make API call from user login button to validate existing user
  // if successful, set this.state.isLoggedIn = true,
  // and sets a random session token and the logged in users email in local storage
  validateUser = query => {
    // console.log(query);
    // getUser(query) calls /api/signin route
    API.getUser(query)
      .then(res => {
        if (res.data.success) {
          // console.log("user login successfully validated.");
          this.setState({ isLoggedIn: true });
          this.setState({ loginMsg: res.data.message });
          window.localStorage.setItem("Wanderlist_authkey", res.data.token);
          window.localStorage.setItem("Wanderlist_userEmail", this.state.email);
        } else {
          // console.log("user login validation failed.");
          this.setState({ isLoggedIn: false });
          this.setState({ loginMsg: res.data.message });
          window.localStorage.setItem("Wanderlist_authkey", "");
          window.localStorage.setItem("Wanderlist_userEmail", "");
        }
      })
      .catch(err => console.log(err));
  };

  // ===================================================

  // handle button click to create a new user account creation
  // NOTE: user is not automatically logged in
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

  // API call for createUser() button handler, adds new user to db
  makeNewUser = query => {
    // console.log(query);
    // createUser calls /api/signup route
    API.createUser(query)
      .then(res => {
        if (res.data.success) {
          console.log("new user create success!");
          this.setState({ firstName: "" });
          this.setState({ lastName: "" });
          this.setState({ newEmail: "" });
          this.setState({ newPassword: "" });
        } else {
          console.log("failed to create new user.");
          // code to execute on failed creation of new user
        }
      })
      .catch(err => console.log(err));
  };

  // ===================================================

  // Log Out button handler and API call to end current user session
  handleUserLogout = event => {
    event.preventDefault();
    // get the current value of the Wanderlist_authkey token in local storage
    let readToken = window.localStorage.getItem("Wanderlist_authkey");
    // set the key and value of the query for token
    let query = {
      token: readToken
    };
    // calls the verify() method in the loginController
    // finds current UserSession collection document and $set: { isDeleted: true }
    API.logOut(query)
      .then(res => {
        if (res.data.success) {
          // set isLoggedIn: false and remove local storage authKey and userEmail tokens
          this.setState({ isLoggedIn: false });
          this.setState({ email: "" });
          this.setState({ password: "" });
          window.localStorage.removeItem("Wanderlist_authkey");
          window.localStorage.removeItem("Wanderlist_userEmail");
          window.location.assign('/');
          console.log("user successfully logged out.");
        } else {
          console.log("user log out failed, user is still logged in.");
        }
        // console.log(`this.state.isLoggedIn: ${this.state.isLoggedIn}`);
      })
      .catch(err => console.log(err));
  };

  // ===================================================

  render() {
    return (
      <>
        {/* NAVIGATION HEADER */}
        <Nav loginStatus={this.state.isLoggedIn} logoutClick={this.handleUserLogout} modalPops={this.showModal} />
        {/* MODAL FOR LOGIN and CREATE NEW USER ACCOUNT */}
        <Modal show={this.state.show} handleClose={this.hideModal} handleLogin={this.loginUser} handleNewUser={this.createUser}>
          {/* USER LOGIN */}
          <div id="login-user-form">
            <form>
              <Input value={this.state.email} onChange={this.handleInputChange} name="email" placeholder="email (required)" type="text" />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password (required)"
                type="password"
              />
              <FormBtn disabled={!(this.state.email && this.state.password)} onClick={this.loginUser}>
                Log In
              </FormBtn>
            </form>
          </div>
          {/* CREATE USER ACCOUNT */}
          <div id="create-user-form">
            <form>
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="first name (required)"
                type="text"
              />
              <Input value={this.state.lastName} onChange={this.handleInputChange} name="lastName" placeholder="last name (required)" type="text" />
              <Input value={this.state.newEmail} onChange={this.handleInputChange} name="newEmail" placeholder="email (required)" type="text" />
              <Input
                value={this.state.newPassword}
                onChange={this.handleInputChange}
                name="newPassword"
                placeholder="password (required)"
                type="password"
              />
              <FormBtn
                disabled={!(this.state.firstName && this.state.lastName && this.state.newEmail && this.state.newPassword)}
                onClick={this.createUser}
              >
                Create Account
              </FormBtn>
            </form>
          </div>
        </Modal>

        {/* START BACKGROUND ELEMENT WRAP */}
        <Background>
          {/* APP LOGOTYPE AND INTRO TEXT HEADER */}
          <Header>
            <Row>
              {/* LOGOTYPE */}
              <Col size="sm-6 md-4">
                <img src="assets/images/dinofii_logo.svg" style={{ width: "90%", maxHeight: 150, padding: "1px 1px 1px 1px" }} alt="Dinofii logo" />
              </Col>

              {/* INTRO TEXT */}
              <Col size="sm-6 md-8">
                <div style={{ fontWeight: "100", color: "#444", textAlign: "left", padding: "0px 30px 30px 0px" }}>
                  <span style={{ fontWeight: "700", color: "rgb(121, 27, 27)" }}>FIND NEW PLACES TO EXPLORE.</span> Select a feature and choose an
                  area to search. Dinofii gives you a random point of interest and the closest city, as well as links to info, maps, directions, and
                  local wifi.
                </div>
              </Col>
            </Row>
          </Header>

          {/* SAVED LOCATIONS CARDS */}
          <CardSavedContainer fluid>
            {/* if there are any feature objects in this.state.savedPlaces, */}
            {this.state.savedPlaces.length ? (
              // create a <List>, a Bootstrap <div> and <ul> list container
              <List>
                {/* and .map the savedPlaces, with each element referred to as "place" */}
                {this.state.savedPlaces.map(place => (
                  // create a <div> for each "place" and set it's unique key
                  <div key={place.placeKey}>
                    {/* then build a <CardSaved> for it, passing all the props */}
                    <CardSaved
                      loginStatus={this.state.isLoggedIn}
                      handleDeleteButton={this.handleDeletePlace}
                      // handleDisabledSaveButton={place.pleaseLogin}
                      placeKey={place.placeKey}
                      email={place.email}
                      featureName={place.featureName}
                      featureType={place.featureType}
                      featureCountryName={place.featureCountryName}
                      featureLatitude={place.featureLatitude}
                      featureLongitude={place.featureLongitude}
                      nearPlaceName={place.nearPlaceName}
                      nearPlaceCountryCode={place.nearPlaceCountryCode}
                      nearPlacePostalCode={place.nearPlacePostalCode}
                      nearPlaceDistance={place.nearPlaceDistance}
                      nearPlaceLatLong={place.nearPlaceLatLong}
                      nearPlaceWifi={place.nearPlaceWifi}
                    />
                  </div>
                ))}
              </List>
            ) : (
              // but if there are no items in this.state.savedPlaces array, display this message
              <h5 className="default-display-type">You haven't saved any locations yet. Go to Search and get your Wander on!</h5>
            )}
          </CardSavedContainer>
        </Background>
      </>
    );
  }
}

export default Saved;
