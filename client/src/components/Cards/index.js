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

export function ResultCard({ children }) {
  return (
    <>
      <div className="card border-secondary mb-3">
        {/* CARD TOP SECTION */}
        <div className="card-header text-primary text-left p-1">
          {/* FEATURE NAME (FEATURE TYPE) : COUNTRY */}
          <h5 className="pl-1" style={{ display: "inline" }}>
            {/* Google search: FEATURE NAME */}
            <a
              href={`https://www.google.com/search?q=Ensenada Mogotes`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(121, 27, 27)", fontWeight: 500, textDecoration: "none" }}
            >
              Ensenada Mogotes
              {/* ${card.featureName} */}
            </a>
            {/* Google search: FEATURE TYPE */}
            <a
              href={`https://www.google.com/search?q=bay`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(162, 155, 99)", fontWeight: 100, textDecoration: "none" }}
            >
              &nbsp;(bay)&nbsp;
              {/* ${card.featureType} */}
            </a>
            {/* Google search: COUNTRY */}
            <a
              href={`https://www.google.com/search?q=Argentina`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(29, 68, 126)", fontWeight: 300, textDecoration: "none" }}
            >
              :&nbsp;Argentina
              {/* ${card.featureCountryName} */}
            </a>
          </h5>
          {/* LONGITUDE AND LATITUDE */}
          <span className="font-weight-light pr-1" style={{ display: "inline", float: "right" }}>
            {/* GoogleMaps feature location */}
            <a
              href={`https://www.google.com/maps/@-38.13333,-57.56667,15z`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(29, 68, 126)" }}
            >
              -38.13333, -57.56667
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
              href={`https://www.google.com/maps/dir/?api=1&origin=-38.1167,-57.6&destination=-38.13333,-57.56667`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(29, 68, 126)" }}
            >
              LOS ACANTILADOS&nbsp;
              {/* ${card.nearPlaceName}  */}
              AR&nbsp;
              {/* ${card.nearPlaceCountryCode}   */}
              7609&nbsp;
              {/* ${card.nearPlacePostalCode}   */}
              (3.5 km)
              {/* (${card.nearPlaceDistance} km) */}
            </a>
          </span>
          {/* Wigle WIFI MAP */}
          <a
            href={`https://wigle.net/map?maplat=-38.13333&maplon=-57.56666999999999&mapzoom=12&coloring=density`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="float-right fas fa-wifi"
              style={{ fontSize: "15px", marginLeft: 2, marginRight: 4, paddingTop: 4, color: "rgb(51, 103, 181)" }}
            />
            <span className="float-right" style={{ color: "rgb(51, 103, 181)" }}>
              3k
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
