// CardsContainer, ResultCard and NoResultCard components
// card to hold a found place's search result details
import React from "react";
import "./style.css";

// ===================================================================
// cards CONTAINER
// ===================================================================

export function CardsContainer({ fluid, children }) {
  return (
    <div id="cards-container" className="container" style={{ padding: "20px 6px 10px 6px" }}>
      {children}
    </div>
  );
}

// ===================================================================
// SEARCH RESULTS card
// ===================================================================

export function ResultCard(props) {
  // console.log(props);
  return (
    <>
      <div className="card border-secondary mb-3">
        {/* CARD TOP SECTION */}
        <div className="card-body text-left pt-2" style={{ padding: "5px 1px 5px 7px" }}>
          {/* FEATURE NAME (FEATURE TYPE) : COUNTRY */}
          <h5 className="nametypecountry pl-1" style={{ display: "inline" }}>
            {/* Google search: FEATURE NAME */}
            <a
              href={`https://www.google.com/search?q=${props.featureName}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(121, 27, 27)", fontWeight: 700, textDecoration: "none" }}
            >
              {props.featureName}
            </a>
            {/* Google search: FEATURE TYPE */}
            <a
              href={`https://www.google.com/search?q=${props.featureType}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(162, 155, 99)", fontWeight: 300, textDecoration: "none" }}
            >
            {` • ${props.featureType} • `}
            </a>
            {/* Google search: COUNTRY */}
            <a
              href={`https://www.google.com/search?q=${props.featureCountryName}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(29, 68, 126)", fontWeight: 500, textDecoration: "none" }}
            >
              {props.featureCountryName}
            </a>
          </h5>
          {/* LONGITUDE AND LATITUDE */}
          <span className="pr-1" style={{ display: "inline-block", float: "right" }}>
            {/* GoogleMaps feature location */}
            <a
              className="featurelonglat"
              href={`https://www.google.com/maps/@${props.featureLatitude},${props.featureLongitude},12z`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", fontWeight: 500, letterSpacing: ".055rem" }}
            >
              {props.featureLatitude}, {props.featureLongitude}
            </a>

            {props.loginStatus ? (
              <button
                type="button"
                className="btn btn-sm btn-success"
                onClick={() => props.handleSaveButton(props.placeKey)}
                style={{
                  float: "right",
                  marginLeft: 10,
                  height: 25,
                  width: 65,
                  padding: "1px 3px 4px 3px",
                  fontWeight: 400,
                  letterSpacing: ".04rem"
                }}
              >
                SAVE
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-sm btn-secondary"
                onClick={props.handleDisabledSaveButton}
                style={{
                  float: "right",
                  marginLeft: 10,
                  height: 25,
                  width: 65,
                  padding: "1px 3px 4px 3px",
                  fontWeight: 400,
                  letterSpacing: ".04rem"
                }}
              >
                SAVE
              </button>
            )}
          </span>
        </div>
        {/* CARD BOTTOM SECTION */}
        <div className="card-header p-1 pl-2 text-left">
          {/* NEARPLACENAME COUNTRYCODE POSTALCODE (DISTANCE km) */}
          {/* GoogleMaps directions from nearest city to feature */}
          <a
            className="nearplacename"
            href={`https://www.google.com/maps/dir/?api=1&origin=${props.nearPlaceLatLong}&destination=${props.featureLatitude},${
              props.featureLongitude
            }`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", fontWeight: 500 }}
          >
            {props.nearPlaceName}&nbsp;
            {props.nearPlaceCountryCode}&nbsp;
            {props.nearPlacePostalCode}&nbsp; ({props.nearPlaceDistance} km)
          </a>
          {/* Wigle WIFI MAP */}
          <a
            href={`https://wigle.net/map?maplat=${props.featureLatitude}&maplon=${
              props.featureLongitude
            }&mapzoom=12&mapstyle=standard&coloring=density`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="float-right fas fa-wifi"
              style={{ fontSize: "15px", marginLeft: 2, marginRight: 4, paddingTop: 4, color: "rgb(51, 103, 181)" }}
            />
            <span className="wifimapnumbers float-right">
              {props.nearPlaceWifi}
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

// ===================================================================
// NO RESULTS card
// ===================================================================

export function NoResultCard({ children }) {
  return (
    <div className="card border-dark mb-3">
      <div className="card-header p-2">
        <p className="mb-0" style={{ color: "rgb(29, 68, 126)" }}>
          No matching features found in that region.
        </p>
      </div>
    </div>
  );
}
