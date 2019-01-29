// FindPlace page is the home page view and is available to all users

import React, { Component } from "react";

// import list arrays for Country+Region and Feature Type <select> menus
import ListRegions from "../utils/ListRegions";
import ListFeatures from "../utils/ListFeatures";

// import single-component .js files
import Header from "../components/Header";
import Background from "../components/Background";
import Nav from "../components/Nav";
import Modal from "../components/Modal";

// import multiple-component .js files
import { SelectRegion, SelectFeature } from "../components/Search";
import { CardsContainer, ResultCard, NoResultCard } from "../components/Cards";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import { Input, FormBtn } from "../components/Form";

// import master style.css for all page views
import "./style.css";

// import API in order to make axios API calls to the Express Server
import API from "../utils/API";

// use axios to make XMLHttpRequest API calls
import axios from "axios";

class FindPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placesArray: [],
      listRegions: ListRegions.countryArray,
      listFeatures: ListFeatures.featureArray,
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
      countryAndRegion: "",
      countryCC: "",
      regionCC: "",
      featureCode: "",
      featureName: "",
      featureType: "",
      featureCountryCode: "",
      featureLatitude: "",
      featureLongitude: "",
      featureLocation: "",
      featureCountryName: "",
      nearPlaceName: "",
      nearPlacePostalCode: "",
      nearPlaceCountryCode: "",
      nearPlaceCountryName: "",
      nearPlaceDistance: "",
      nearPlaceLatLong: "",
      nearPlaceWifi: "wifi map"
    };
  }

  // ===================================================
  // ===================================================
  // AUTHENTICATION METHODS
  // ===================================================
  // ===================================================

  componentDidUpdate() {
    // console.log(`<FindPlace> component updated with this state:`);
    console.log(this.state);
    // console.log(`<FindPlace> DidUpdate this.state.isLoggedIn: ${this.state.isLoggedIn}`);
    // console.log(`<FindPlace> DidUpdate this.state.email: ${this.state.email}`);
  }
  // ===================================================

  componentDidMount() {
    // console.log(`<FindPlace> component mounted with this state:`);
    // console.log(this.state);
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
        console.log(this.state);
        // console.log(`<FindPlace> DidMount this.state.isLoggedIn: ${this.state.isLoggedIn}`);
        // console.log(`<FindPlace> DidMount this.state.email: ${this.state.email}`);
      })
      .catch(err => console.log(err));
  }
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
          window.location.assign("/");
          console.log("user successfully logged out.");
        } else {
          console.log("user log out failed, user is still logged in.");
        }
        // console.log(`this.state.isLoggedIn: ${this.state.isLoggedIn}`);
      })
      .catch(err => console.log(err));
  };

  // ===================================================
  // ===================================================
  // API SEARCH METHODS
  // ===================================================
  // ===================================================

  // ===========================================================================
  // GET A RANDOM FEATURE FROM GeoNames BASED ON SELECTED REGION AND FEATURE TYPE
  // ===========================================================================

  // constructs the string for first API call based on option selects in Region and Feature inputs
  // searches GeoNames for (max: 1000) matches to query parameters:
  // either: Earth+Feature Type, Country+Feature Type, or Country+Region+Feature Type
  geonamesString = () => {
    // if user has selected a Feature Type (required)
    if (this.state.featureCode) {
      // make blank variable for API URL string
      let geoString;
      if (this.state.countryCC === "XX") {
        // Earth + Feature Type
        geoString = `https://secure.geonames.org/searchJSON?featureCode=${this.state.featureCode}&maxRows=1000&username=ghostfountain`;
        return geoString;
      } else if (this.state.regionCC === "") {
        // Country + Feature Type
        geoString = `https://secure.geonames.org/searchJSON?featureCode=${this.state.featureCode}&country=${
          this.state.countryCC
        }&maxRows=1000&username=ghostfountain`;
        return geoString;
      } else {
        // Country + Region + Feature Type
        geoString = `https://secure.geonames.org/searchJSON?featureCode=${this.state.featureCode}&country=${this.state.countryCC}&adminCode1=${
          this.state.regionCC
        }&maxRows=1000&username=ghostfountain`;
        return geoString;
      }
      // console.log(geoString);
    } else {
      // if user has not selected a Feature Type
      alert("Please select a feature type.");
    }
  };

  // ===================================================

  // event handler for "search" button, makes first GeoNames API call
  // with URL string constructed above in geonamesString() based on select inputs
  handleFormSubmit = event => {
    event.preventDefault();
    // console.log(this.geonamesString());
    // axios makes XMLHttpRequest GET call to geoNames API
    axios
      .get(this.geonamesString())
      .then(response => {
        // console.log(response.data);
        if (response.data.totalResultsCount === 0) {
          console.log("No matching features found in that region.");
          this.setState({
            featureName: "",
            featureType: "",
            featureCountryName: "",
            featureLatitude: "",
            featureLongitude: "",
            nearPlaceName: "",
            nearPlaceCountryCode: "",
            nearPlacePostalCode: "",
            nearPlaceDistance: "",
            nearPlaceLatLong: "",
            nearPlaceWifi: ""
          });
        } else {
          // console.log(response.data.totalResultsCount);
          // console.log(response.data.geonames);

          // set maxNumber as either number of results, or 1000 if more than 1000 results
          let maxNumber = Math.min(response.data.totalResultsCount, 1000);
          // console.log(maxNumber);

          // get a random number from 0 to maxNumber
          let random = Math.floor(Math.random() * maxNumber);
          // console.log(random);

          // use random to select one feature element (object) from the returned data array
          let theFeature = response.data.geonames[random];
          // console.log(theFeature);

          // extract and set in state relevant data from the selected feature object
          this.setState({
            featureName: theFeature.name,
            featureType: theFeature.fcodeName,
            featureCountryCode: theFeature.countryCode,
            featureLatitude: theFeature.lat,
            featureLongitude: theFeature.lng,
            featureLocation: theFeature.fclName
          });

          // handle featureCountryName separately, since a country name is not always included
          // i.e., underwater features, etc.
          if (theFeature.countryName) {
            this.setState({
              featureCountryName: theFeature.countryName
            });
          } else {
            this.setState({ featureCountryName: "" });
          }
        }
      })
      // after first API call completes, make second API call for nearby postal codes
      .then(() => {
        this.getPostalCodes();
      });
  };

  // ===========================================================================
  // GET CLOSEST POSTAL CODE TO FEATURE LOCATION and NEARBY PLACE
  // LAT+LONG COORDINATES FROM EZCMD API (limit 10,000 calls/month)
  // ===========================================================================

  // EZCMD postal code search based on GeoNames feature's Lat and Long coordinates
  getPostalCodes = () => {
    // API URL string for EZCMD postal code search, specify Lat and Long coordinates
    let ezcmdPostalCodes = `https://ezcmd.com/apps/api_geo_postal_codes/nearby_locations_by_coords/866eaf56be3781d02011b80ebd0baef8/354?coords=${
      this.state.featureLatitude
    },${this.state.featureLongitude}&within=100&unit=Km`;

    // and have axios make the XMLHttpRequest GET call to EZCMD API
    axios.get(ezcmdPostalCodes).then(response => {
      // console.log(response.data);
      // console.log(response.data.search_results[0]);

      // if any postal codes are returned from the API call,
      // use the first array object result to set relevant data in this.state
      if (response.data.search_results.length > 0) {
        this.setState({
          nearPlaceName: response.data.search_results[0].place_name.trim(),
          nearPlacePostalCode: response.data.search_results[0].postal_code,
          nearPlaceCountryCode: response.data.search_results[0].country_code,
          nearPlaceCountryName: response.data.search_results[0].country_name,
          nearPlaceDistance: Math.round(response.data.search_results[0].distance * 10) / 10,
          nearPlaceLatLong: response.data.search_results[0].coords
        });
        // and then make the third API call to Wigle for wifi hotspot info
        this.getHotspots();
        // if no postal codes are returned, but GeoNames returned some featureLocation data,
        // use GeoNames API data to set ambiguous nearby data
      } else if (this.state.featureLocation) {
        this.setState({
          nearPlaceName: this.state.featureLocation,
          nearPlacePostalCode: "",
          nearPlaceCountryCode: this.state.featureCountryCode,
          nearPlaceCountryName: this.state.featureCountryName,
          nearPlaceDistance: "?",
          nearPlaceLatLong: ""
        });
        // and then make the third API call to Wigle for wifi hotspot info
        this.getHotspots();
      } else {
        // or, if there are no postal codes returned AND no GeoNames featureLocation data,
        // just make the third API call to Wigle, since Wigle map location will use
        // the feature's Lat and Long coordinates anyway (postal code results too unreliable)
        this.getHotspots();
        console.log("CLOSEST CITY: no info");
      }
    });
  };

  // ===================================================

  // ===========================================================================
  // GET # OF WIFI HOTSPOTS BY POSTAL CODE FROM WIGLE API (service is beta, no set limits)
  // ===========================================================================

  // attempt to retrieve and calculate number of wifi hotspots in feature's nearby postal code
  // EZCMD and Wigle postal code matches are infrequent and unreliable,
  // so Wigle map coordinates use GeoNames feature Lat+Long coords for targeting
  getHotspots = () => {
    // Wigle API accepts a country code and returns # of wifi hotspots by postal code
    let wigleHotspots = `https://api.wigle.net/api/v2/stats/regions?country=${this.state.nearPlaceCountryCode}`;
    // console.log(`this.state.nearPlaceCountryCode: ${this.state.nearPlaceCountryCode}`);

    // axios makes XMLHttpRequest GET call to Wigle API
    // API key must be sent in request header as Base64 btoa encoded string
    axios
      .get(wigleHotspots, {
        headers: {
          Authorization: "Basic " + btoa("AID544c0365fdcc8c2463ec21d3590bbd23:8891f56fb22400d107dd8ee49d2798ff")
        }
      })
      .then(response => {
        // console.log(response.data);
        // console.log(response.data.postalCode[0]);
        // console.log(this.state.nearPlacePostalCode);

        // formats thousands number of WiFi hotspots to shorter k decimal number
        let kFormatter = num => {
          return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
        };

        // loop through the postalCode array of {postalCode: x, count: x} objects returned
        for (let k = 0; k < response.data.postalCode.length; k++) {
          // the value of each postal code's {postalCode: x}
          let PostalCode = response.data.postalCode[k].postalCode;
          // the value of each postal code's {count: x}
          let wifiCountK = kFormatter(response.data.postalCode[k].count);

          // console.log(wifiCountK);
          // console.log(PostalCode);
          // console.log(this.state.nearPlacePostalCode);

          // if one of Wigle's postal codes matches the EZCMD nearby place postal code,
          if (PostalCode === this.state.nearPlacePostalCode) {
            // console.log("It's a match:");
            // console.log(wifiCountK);
            // console.log(this.state.nearPlaceCountryCode);
            // get and set the .count of the matched postal code as this.state.nearPlaceWifi
            // otherwise the default value of nearPlaceWifi is "wifi map" for display purposes
            this.setState({
              nearPlaceWifi: wifiCountK
            });
          }
        }
      })
      .catch(error => {
        console.log(error);
      });

    // after third and final API call finishes,
    // use buildCard to add search result feature to this.state.placesArray
    // .map this.state.placesArray in render() to create a Card for each feature in array
    this.buildCard();
  };

  // ===================================================

  // takes the resulting state data set by all three API calls and builds an object
  // that is placed into this.state.placesArray, which is .map() mapped in render()
  buildCard = () => {
    // generates a random unique key for each search result for db storage in "places" collection
    let placeKey = () => {
      let text = "";
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 24; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    };
    // console.log(placeKey());

    // create a newCard object with data from the just completed feature search
    // and add the random placeKey and current user's email to the feature object
    let newCard = {};
    newCard.placeKey = placeKey();
    newCard.email = this.state.email;
    newCard.featureName = this.state.featureName;
    newCard.featureType = this.state.featureType;
    newCard.featureCountryName = this.state.featureCountryName;
    newCard.featureLatitude = this.state.featureLatitude;
    newCard.featureLongitude = this.state.featureLongitude;
    newCard.nearPlaceName = this.state.nearPlaceName;
    newCard.nearPlaceCountryCode = this.state.nearPlaceCountryCode;
    newCard.nearPlacePostalCode = this.state.nearPlacePostalCode;
    newCard.nearPlaceDistance = this.state.nearPlaceDistance;
    newCard.nearPlaceLatLong = this.state.nearPlaceLatLong;
    newCard.nearPlaceWifi = this.state.nearPlaceWifi;
    // console.log(`newCard:`);
    // console.log(newCard);

    // get the current array of search results in this.state.placesArray
    let currentPlaces = this.state.placesArray;
    // console.log(`currentPlaces:`);
    // console.log(currentPlaces);

    // use destructuring with the spread operator to push the newCard into placesArray
    let newPlacesArray = [newCard, ...currentPlaces];
    // console.log(`newPlacesArray:`);
    // console.log(newPlacesArray);

    // set the new array with newCard added as the new value of this.state.placesArray
    this.setState({ placesArray: newPlacesArray });
    // console.log(`NEW this.state.placesArray:`);
    // console.log(this.state.placesArray);
  };

  // ===================================================

  // event handler for save button located on each search result feature
  // finds that Cards data object in this.state.placesArray
  // and saves feature object to db places collection, which is tagged with user's email
  handleSavePlace = pKey => {
    // console.log("Save place button clicked!");
    // console.log(pKey);

    // get all currently displayed feature objects data, which are in placesArray
    let currentPlaces = this.state.placesArray;
    // console.log(currentPlaces);

    // loop through all current features in this.state.placesArray
    for (let i = 0; i < currentPlaces.length; i++) {
      // variable for each feature object looped
      const placeObject = currentPlaces[i];

      // if a feature object's placeKey matches the placeKey passed by the save button,
      if (placeObject.placeKey === pKey) {
        // console.log(placeObject);
        // call the savePlace API route and pass it that feature object
        // to save it to the MongoDB's "places" collection
        API.savePlace(placeObject)
          .then(res => {
            // console.log(res.status);
            if (res.status === 200) {
              console.log("place saved!");
              window.location.assign("/saved");
            } else {
              console.log("failed to save this place.");
            }
          })
          .catch(err => console.log(err));
      }
    }
  };

  // when save button clicked without user logged in,
  // alert user that they must be logged in to save search results
  pleaseLogin = () => {
    // console.log("User not logged in: can't save place!");
    alert(`Please log in or sign up to save search results.`);
  };

  // ===================================================

  // when the "clear" button is clicked, remove all current search results
  handleClearButton = () => {
    // empty out the current contents of this.state.placesArray
    this.setState({ placesArray: [] });
  };

  // ===================================================

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

          {/* SEARCH OPTION SELECTS */}
          <Container>
            <form action="">
              <Row>
                {/* COUNTRY AND REGION SELECT */}
                <div className="col-sm-6 p-2">
                  <div className="input-group">
                    <SelectRegion
                      list={this.state.listRegions}
                      thisRegion={this.handleInputChange}
                      // onChange={console.log(this.state.countryAndRegion, this.state.countryCC, this.state.regionCC)}
                    />
                  </div>
                </div>
                {/* FEATURE TYPE SELECT */}
                <div className="col-sm-6 p-2">
                  <div className="input-group">
                    <SelectFeature
                      list={this.state.listFeatures}
                      thisFeature={this.handleInputChange}
                      // onChange={console.log(this.state.featureCode)}
                      findFeature={this.handleFormSubmit}
                    />
                  </div>
                </div>
              </Row>
            </form>
          </Container>

          {/* CLEAR ALL RESULTS and SEARCH RESULTS HEADER */}
          <Container>
            <div id="results_header" className="row pr-2 pl-2">
              <div className="input-group input-group-sm mb-3">
                {/* "SEARCH RESULTS:" */}
                <button className="form-control btn-outline-light text-left" style={{ height: "30px" }} disabled>
                  SEARCH RESULTS:
                </button>
                {/* CLEAR ALL RESULTS BUTTON */}
                <div className="input-group-prepend">
                  <button
                    onClick={() => this.handleClearButton()}
                    className="form-control btn btn-outline-light"
                    type="button"
                    id="clear_button"
                    style={{ width: "5rem", height: "30px" }}
                  >
                    CLEAR
                  </button>
                </div>
              </div>
            </div>
          </Container>

          {/* SEARCH RESULT CARDS */}
          <CardsContainer fluid>
            {/* if there are any feature objects in this.state.placesArray, */}
            {this.state.placesArray.length ? (
              // create a <List>, a Bootstrap <div> and <ul> list container
              <List>
                {/* and .map the placesArray, with each element referred to as "place" */}
                {this.state.placesArray.map(place => (
                  // create a <div> for each "place" and set it's unique key
                  <div key={place.placeKey}>
                    {/* if a search result has a featureName (at least one feature returned) */}
                    {place.featureName ? (
                      // then build a <ResultCard> for it, passing all the props
                      <ResultCard
                        loginStatus={this.state.isLoggedIn}
                        handleSaveButton={this.handleSavePlace}
                        handleDisabledSaveButton={place.pleaseLogin}
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
                    ) : (
                      // but if search result has no featureName (no results found)
                      // then build a <NoResultCard> instead
                      <NoResultCard />
                    )}
                  </div>
                ))}
              </List>
            ) : (
              // but if there are no items in this.state.placesArray, display this message
              <h5 className="default-display-type">Select a feature type and region, then click search to find a random destination!</h5>
            )}
          </CardsContainer>
        </Background>
      </>
    );
  }
}

export default FindPlace;
