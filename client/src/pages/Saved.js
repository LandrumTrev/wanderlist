// Saved page is the saved features page view and is only available to logged in users

import React, { Component } from "react";

// import single-component .js files
import Background from "../components/Background";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";

// import multiple-component .js files
import { CardSavedContainer, CardSaved } from "../components/CardSaved";
import { List } from "../components/List";

// import master style.css for all page views
import "./style.css";

// import API in order to make axios API calls to the Express Server
import API from "../utils/API";

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedPlaces: [],
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

  // ===========================================================================
  // ===========================================================================
  // LOAD LIST AND HANDLE DELETE
  // ===========================================================================
  // ===========================================================================

  // calls db for all Places tagged with logged in user's email address
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

  // ===========================================================================
  // ===========================================================================
  // GENERAL METHODS
  // ===========================================================================
  // ===========================================================================

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

  // ===========================================================================
  // ===========================================================================
  // AUTHENTICATION (only Log Out button handler)
  // ===========================================================================
  // ===========================================================================

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
          window.location.assign("/");
          console.log("user successfully logged out.");
        } else {
          console.log("user log out failed, user is still logged in.");
        }
        // console.log(`this.state.isLoggedIn: ${this.state.isLoggedIn}`);
      })
      .catch(err => console.log(err));
  };

  // ===========================================================================
  // ===========================================================================
  // RENDER
  // ===========================================================================
  // ===========================================================================

  render() {
    return (
      <>
        {/* NAVIGATION HEADER */}
        <Nav
          loginStatus={this.state.isLoggedIn}
          logoutClick={this.handleUserLogout}
          modalPops={this.showModal}
          page={this.props.location.pathname}
          onChange={console.log(this.props.location.pathname)}
        />

        {/* START BACKGROUND ELEMENT WRAP */}
        <Background>
          {/* APP LOGOTYPE AND INTRO TEXT HEADER */}
          <Jumbotron />

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
