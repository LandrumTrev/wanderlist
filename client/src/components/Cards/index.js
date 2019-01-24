// CardsContainer, ResultCard and NoResultCard components
// card to hold a found place's search result details
import React from "react";
import "./style.css";

// ===================================================================
// cards CONTAINER
// ===================================================================

export function CardsContainer({ fluid, children }) {
  return (
    <div className="container" style={{ paddingTop: 20, paddingRight: 6, paddingLeft: 6, textAlign: "center" }}>
      {children}
    </div>
  );
}

// ===================================================================
// SEARCH RESULTS card
// ===================================================================

// return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;

export function ResultCard(props) {
  return (
    <>
      <div className="card border-secondary mb-3">
        {/* CARD TOP SECTION */}
        <div className="card-header text-primary text-left p-1">
          {/* FEATURE NAME (FEATURE TYPE) : COUNTRY */}
          <h5 className="pl-1" style={{ display: "inline" }}>
            {/* Google search: FEATURE NAME */}
            <a
              // href={`https://www.google.com/search?q=Ensenada Mogotes`}
              href={`https://www.google.com/search?q=${props.featureName}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(121, 27, 27)", fontWeight: 500, textDecoration: "none" }}
            >
              {props.featureName}
              {/* Ensenada Mogotes */}
              {/* ${card.featureName} */}
            </a>
            {/* Google search: FEATURE TYPE */}
            <a
              // href={`https://www.google.com/search?q=bay`}
              href={`https://www.google.com/search?q=${props.featureType}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(162, 155, 99)", fontWeight: 100, textDecoration: "none" }}
            >
              &nbsp;{props.featureType}&nbsp;
              {/* &nbsp;(bay)&nbsp; */}
              {/* ${card.featureType} */}
            </a>
            {/* Google search: COUNTRY */}
            <a
              // href={`https://www.google.com/search?q=Argentina`}
              href={`https://www.google.com/search?q=${props.featureCountryName}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(29, 68, 126)", fontWeight: 300, textDecoration: "none" }}
            >
              :&nbsp;{props.featureCountryName}
              {/* :&nbsp;Argentina */}
              {/* ${card.featureCountryName} */}
            </a>
          </h5>
          {/* LONGITUDE AND LATITUDE */}
          <span className="font-weight-light pr-1" style={{ display: "inline", float: "right" }}>
            {/* GoogleMaps feature location */}
            <a
              // href={`https://www.google.com/maps/@-38.13333,-57.56667,15z`}
              href={`https://www.google.com/maps/@${props.featureLatitude},${props.featureLongitude},12z`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(29, 68, 126)" }}
            >
              {props.featureLatitude}, {props.featureLongitude}
              {/* -38.13333, -57.56667 */}
              {/* ${card.featureLatitude}, ${card.featureLongitude} */}
            </a>
          </span>
        </div>
        {/* CARD BOTTOM SECTION */}
        <div className="card-body p-1 pl-2 text-left">
          {/* NEARPLACENAME COUNTRYCODE POSTALCODE (DISTANCE km) */}
          <span className="font-weight-light">
            {/* GoogleMaps directions from nearest city to feature */}
            <a
              // ${card.nearPlaceLatLong}
              // href={`https://www.google.com/maps/dir/?api=1&origin=-38.1167,-57.6&destination=-38.13333,-57.56667`}
              href={`https://www.google.com/maps/dir/?api=1&origin=${props.nearPlaceLatLong}&destination=${props.featureLatitude},${props.featureLongitude}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(29, 68, 126)" }}
            >
              {props.nearPlaceName}&nbsp;
              {/* LOS ACANTILADOS&nbsp; */}
              {/* ${card.nearPlaceName}  */}
              {props.nearPlaceCountryCode}&nbsp;
              {/* AR&nbsp; */}
              {/* ${card.nearPlaceCountryCode}   */}
              {props.nearPlacePostalCode}&nbsp;
              {/* 7609&nbsp; */}
              {/* ${card.nearPlacePostalCode}   */}
              ({props.nearPlaceDistance} km)
              {/* (3.5 km) */}
              {/* (${card.nearPlaceDistance} km) */}
            </a>
          </span>
          {/* Wigle WIFI MAP */}
          <a
            // href={`https://wigle.net/map?maplat=-38.13333&maplon=-57.56666999999999&mapzoom=12&coloring=density`}
            href={`https://wigle.net/map?maplat=${props.featureLatitude}&maplon=${props.featureLongitude}&mapzoom=12&mapstyle=standard&coloring=density`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="float-right fas fa-wifi"
              style={{ fontSize: "15px", marginLeft: 2, marginRight: 4, paddingTop: 4, color: "rgb(51, 103, 181)" }}
            />
            <span className="float-right" style={{ color: "rgb(51, 103, 181)" }}>
              {props.nearPlaceWifi}
              {/* 3k */}
              {/* ${card.nearPlaceWifi} */}
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
          Sorry, no matching features found in this area.
        </p>
      </div>
    </div>
  );
}
