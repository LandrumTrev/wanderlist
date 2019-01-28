// Saved page view Component called by React Router in the App.js Router Switch Routes
// Saved page only available to logged in users

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

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      countryAndRegion: "",
      countryCC: "",
      regionCC: "",
      featureCode: "",
      listRegions: ListRegions.countryArray,
      listFeatures: ListFeatures.featureArray,
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

  componentDidUpdate() {
    // console.log(this.state.regionCC);
    // console.log("Saved component updated with this state:");
    // console.log(this.state);
  }
  // ===================================================

  componentDidMount() {
    // this.loadBooks();
    // console.log("Saved component mounted with this state:");
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
        console.log(`<Saved> this.state.isLoggedIn is set to: ${this.state.isLoggedIn}`);
        // console.log(this.state);
      })
      .catch(err => console.log(err));
  }
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
      <Nav />
        {/* <Container fluid > */}
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

export default Saved;
