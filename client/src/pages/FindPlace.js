// FindPlace page view Component called by React Router in the App.js Router Switch Routes
// FindPlace page is available to all users

import React, { Component } from "react";
// import ReactDOM from "react-dom";
// use a <Link> tag in place of <a href> to link to another page view with React Router
// import { Link } from "react-router-dom";

// import list object arrays for Countries/Regions and Feature types
import ListRegions from "../utils/ListRegions";
import ListFeatures from "../utils/ListFeatures";

// import single-component .js files
import Header from "../components/Header";
import Background from "../components/Background";
import Nav from "../components/Nav";
import Modal from "../components/Modal";
import { Input, FormBtn } from "../components/Form";

// import DeleteBtn from "../components/DeleteBtn";

// import multiple-component .js files
import { Col, Row, Container } from "../components/Grid";
import { SelectRegion, SelectFeature } from "../components/Search";
import { CardsContainer, ResultCard, NoResultCard } from "../components/Cards";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

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
      // NAV PROPS:,
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
      // nearPlaceWifi: ""
      // CURRENT PLACE SEARCH PROPS:,
      countryAndRegion: "",
      countryCC: "",
      regionCC: "",
      featureCode: "",
      featureName: "Ensenada Mogotes",
      featureType: "bay",
      featureCountryCode: "AR",
      featureLatitude: "-38.13333",
      featureLongitude: "-57.56667",
      featureLocation: "",
      featureCountryName: "Argentina",
      nearPlaceName: "LOS ACANTILADOS",
      nearPlacePostalCode: "7609",
      nearPlaceCountryCode: "AR",
      nearPlaceCountryName: "Argentina",
      nearPlaceDistance: "3.5",
      nearPlaceLatLong: "-38.1167,-57.6",
      nearPlaceWifi: "wifi map"
    };
  }

  // ===================================================
  // AUTHENTICATION METHODS
  // ===================================================

  componentDidUpdate() {
    console.log(`<FindPlace> this.state.email is set to: ${this.state.email}`);
    // console.log("FindPlace component updated with this state:");
    // console.log(this.state);
  }
  // ===================================================

  componentDidMount() {
    // this.loadBooks();
    // console.log("FindPlace component mounted with this state:");
    // console.log(this.state);
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
        console.log(`<FindPlace> this.state.isLoggedIn is set to: ${this.state.isLoggedIn}`);
        // console.log(this.state);
      })
      .catch(err => console.log(err));
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

  // send live typed input data to this.state.title, .author, .synopsis on each keystroke
  handleInputChange = event => {
    // create variables name and value for event.target.name and event.target.value
    const { name, value } = event.target;
    // use setState to change state values of the state key [name] for whichever property
    // if selecting a country or region, also set the Country Code and Region Codes
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
  // API SEARCH METHODS
  // ===================================================

  geonamesString = () => {
    if (this.state.featureCode) {
      let geoString;
      if (this.state.countryCC === "XX") {
        geoString = `https://secure.geonames.org/searchJSON?featureCode=${this.state.featureCode}&maxRows=1000&username=ghostfountain`;
        return geoString;
      } else if (this.state.regionCC === "") {
        geoString = `https://secure.geonames.org/searchJSON?featureCode=${this.state.featureCode}&country=${
          this.state.countryCC
        }&maxRows=1000&username=ghostfountain`;
        return geoString;
      } else {
        geoString = `https://secure.geonames.org/searchJSON?featureCode=${this.state.featureCode}&country=${this.state.countryCC}&adminCode1=${
          this.state.regionCC
        }&maxRows=1000&username=ghostfountain`;
        return geoString;
      }
      // console.log(geoString);
    } else {
      alert("Please select a feature type.");
    }
  };

  // ===================================================

  // when user hits the submit button to add a new book,
  handleFormSubmit = event => {
    // prevent page reload default behavior of "submit"
    event.preventDefault();

    // test geonamesString()
    // console.log(this.geonamesString());

    // call geonamesString to construct with current info,
    // and have axios make the XMLHttpRequest GET call to geoNames API
    axios
      .get(this.geonamesString())
      .then(response => {
        // console.log(response.data);

        if (response.data.totalResultsCount === 0) {
          // buildNoResults();
          console.log("Sorry, no results!");

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

          // get number of results up to 1000 (set as 1000 if more than 1000)
          let maxNumber = Math.min(response.data.totalResultsCount, 1000);

          // get a random number from the range of number of results returned
          let random = Math.floor(Math.random() * maxNumber);
          // console.log(random);

          // use the random number to select one result from the returned data
          let theFeature = response.data.geonames[random];
          // console.log(theFeature);

          this.setState({
            featureName: theFeature.name,
            featureType: theFeature.fcodeName,
            featureCountryCode: theFeature.countryCode,
            featureLatitude: theFeature.lat,
            featureLongitude: theFeature.lng,
            featureLocation: theFeature.fclName
          });

          if (theFeature.countryName) {
            this.setState({
              featureCountryName: theFeature.countryName
            });
          } else {
            this.setState({ featureCountryName: "" });
          }
        }
        // });
      })
      .then(() => {
        this.getPostalCodes();
        // console.log("monkeypants");
      });
  };

  // ===========================================================================
  // GET CLOSEST POSTAL CODE TO FEATURE LOCATION and NEARBY PLACE
  // LAT+LONG COORDINATES FROM EZCMD API (limit 10,000 calls/month)
  // ===========================================================================

  getPostalCodes = () => {
    // build API string for EZCMD postal code search
    let ezcmdPostalCodes = `https://ezcmd.com/apps/api_geo_postal_codes/nearby_locations_by_coords/866eaf56be3781d02011b80ebd0baef8/354?coords=${
      this.state.featureLatitude
    },${this.state.featureLongitude}&within=100&unit=Km`;

    // and have axios make the XMLHttpRequest GET call to EZCMD API
    axios.get(ezcmdPostalCodes).then(response => {
      // console.log(response.data);
      console.log(response.data.search_results[0]);

      if (response.data.search_results.length > 0) {
        this.setState({
          nearPlaceName: response.data.search_results[0].place_name.trim(),
          nearPlacePostalCode: response.data.search_results[0].postal_code,
          nearPlaceCountryCode: response.data.search_results[0].country_code,
          nearPlaceCountryName: response.data.search_results[0].country_name,
          nearPlaceDistance: Math.round(response.data.search_results[0].distance * 10) / 10,
          nearPlaceLatLong: response.data.search_results[0].coords
        });

        this.getHotspots();
      } else if (this.state.featureLocation) {
        this.setState({
          nearPlaceName: this.state.featureLocation,
          nearPlacePostalCode: "",
          nearPlaceCountryCode: this.state.featureCountryCode,
          nearPlaceCountryName: this.state.featureCountryName,
          nearPlaceDistance: "?",
          nearPlaceLatLong: ""
        });

        this.getHotspots();
      } else {
        this.getHotspots();
        console.log("CLOSEST CITY: no info");
      }
    });
  };

  // ===================================================

  // ===========================================================================
  // GET # OF WIFI HOTSPOTS BY POSTAL CODE FROM WIGLE API (service is beta, no set limits)
  // ===========================================================================

  // // mini function to format thousands of WiFi numbers to k format
  // kFormatter = num => {
  //   return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
  // };

  getHotspots = () => {
    let wigleHotspots = `https://api.wigle.net/api/v2/stats/regions?country=${this.state.nearPlaceCountryCode}`;
    // console.log(this.state.nearPlaceCountryCode);
    // console.log("this.state.nearPlaceCountryCode");
    // console.log(this.state.nearPlaceCountryCode);

    // and have axios make the XMLHttpRequest GET call to EZCMD API
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

        // mini function to format thousands of WiFi numbers to k format
        let kFormatter = num => {
          return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
        };

        for (let k = 0; k < response.data.postalCode.length; k++) {
          let PostalCode = response.data.postalCode[k].postalCode;
          let wifiCountK = kFormatter(response.data.postalCode[k].count);

          // console.log(wifiCountK);
          // console.log(PostalCode);
          // console.log(this.state.nearPlacePostalCode);

          if (PostalCode === this.state.nearPlacePostalCode) {
            // console.log("It's a match:");
            // console.log(wifiCountK);
            // console.log(this.state.nearPlaceCountryCode);

            this.setState({
              nearPlaceWifi: wifiCountK
            });
          }
        }
      })
      .catch(error => {
        console.log(error);
      });

    // this.buildCard();
  };

  // ===================================================

  savePlace = () => {
    // code
    console.log("Saving place!");
  };

  pleaseLogin = () => {
    // comment
    console.log("User not logged in: can't save place!");
    alert(`Please log in or sign up to save search results.`);
  };

  // ===================================================

  render() {
    return (
      <>
        <Nav loginStatus={this.state.isLoggedIn} logoutClick={this.handleUserLogout} modalPops={this.showModal} firstName={this.state.firstName} />

        {/* <Container fluid > */}
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

        <Background>
          {/* logo and intro text header */}
          <Header>
            <Row>
              <Col size="sm-6 md-4">
                <img src="assets/images/dinofii_logo.svg" style={{ width: "90%", maxHeight: 150, padding: "1px 1px 1px 1px" }} alt="Dinofii logo" />
              </Col>
              <Col size="sm-6 md-8">
                <div style={{ fontWeight: "100", color: "#444", textAlign: "left", padding: "0px 30px 30px 0px" }}>
                  <span style={{ fontWeight: "700", color: "rgb(121, 27, 27)" }}>FIND NEW PLACES TO EXPLORE.</span> Select a feature and choose an
                  area to search. Dinofii gives you a random point of interest and the closest city, as well as links to info, maps, directions, and
                  local wifi.
                </div>
              </Col>
            </Row>
          </Header>

          {/* Search Options Pulldown Selects */}
          <Container>
            {/* <Container fluid> */}
            <form action="">
              <Row>
                <div className="col-sm-6 p-2">
                  <div className="input-group">
                    <SelectRegion
                      list={this.state.listRegions}
                      thisRegion={this.handleInputChange}
                      onChange={console.log(this.state.countryAndRegion, this.state.countryCC, this.state.regionCC)}
                    />
                  </div>
                </div>
                <div className="col-sm-6 p-2">
                  <div className="input-group">
                    <SelectFeature
                      list={this.state.listFeatures}
                      thisFeature={this.handleInputChange}
                      onChange={console.log(this.state.featureCode)}
                      findFeature={this.handleFormSubmit}
                    />
                  </div>
                </div>
              </Row>
            </form>
          </Container>

          {/* Clear All Results button and search results label */}
          {/* <Container>
            <div id="results_header" className="row pr-2 pl-2">
              <div className="input-group input-group-sm mb-3">
                <button className="form-control btn-outline-light text-left" style={{ height: "30px" }} disabled>
                  SEARCH RESULTS:
                </button>
                <div className="input-group-prepend">
                  <button className="form-control btn btn-outline-light" type="button" id="clear_button" style={{ width: "5rem", height: "30px" }}>
                    CLEAR
                  </button>
                </div>
              </div>
            </div>
          </Container> */}

          {/* ResultCards list */}
          <CardsContainer fluid>
            {this.state.featureName ? (
              <ResultCard
                loginStatus={this.state.isLoggedIn}
                handleSaveButton={this.savePlace}
                handleDisabledSaveButton={this.pleaseLogin}
                featureName={this.state.featureName}
                featureType={this.state.featureType}
                featureCountryName={this.state.featureCountryName}
                featureLatitude={this.state.featureLatitude}
                featureLongitude={this.state.featureLongitude}
                nearPlaceName={this.state.nearPlaceName}
                nearPlaceCountryCode={this.state.nearPlaceCountryCode}
                nearPlacePostalCode={this.state.nearPlacePostalCode}
                nearPlaceDistance={this.state.nearPlaceDistance}
                nearPlaceLatLong={this.state.nearPlaceLatLong}
                nearPlaceWifi={this.state.nearPlaceWifi}
              />
            ) : (
              <NoResultCard />
            )}
          </CardsContainer>
        </Background>
      </>
    );
  }
}

export default FindPlace;
