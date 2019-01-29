// CardSavedContainer and CardSaved components
// card to hold a saved place's search result details
import React from "react";
import "./style.css";

// ===================================================================
// SAVED CARDS CONTAINER
// ===================================================================

export function CardSavedContainer({ fluid, children }) {
  return (
    <div id="cards-container" className="container" style={{ padding: "20px 6px 10px 6px" }}>
      {children}
    </div>
  );
}

// ===================================================================
// SAVED RESULTS card
// ===================================================================

export function CardSaved(props) {
  // console.log(props);
  return (
    <>
      <div className="card border-secondary mb-3">
        {/* CARD TOP SECTION */}
        <div className="card-body text-left pt-2" style={{ padding: "5px 1px 5px 7px" }}>
          {/* FEATURE NAME (FEATURE TYPE) : COUNTRY */}
          <h5 className="pl-1" style={{ display: "inline" }}>
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
              &nbsp;{props.featureType}&nbsp;
            </a>
            {/* Google search: COUNTRY */}
            <a
              href={`https://www.google.com/search?q=${props.featureCountryName}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(29, 68, 126)", fontWeight: 500, textDecoration: "none" }}
            >
              :&nbsp;{props.featureCountryName}
            </a>
          </h5>
          {/* LONGITUDE AND LATITUDE */}
          <span className="pr-1" style={{ display: "inline", float: "right" }}>
            {/* GoogleMaps feature location */}
            <a
              href={`https://www.google.com/maps/@${props.featureLatitude},${props.featureLongitude},12z`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(29, 68, 126)", textDecoration: "none", fontWeight: 500, letterSpacing: ".055rem" }}
            >
              {props.featureLatitude}, {props.featureLongitude}
            </a>
            <button
              type="button"
              className="btn btn-sm"
              onClick={() => props.handleDeleteButton(props.placeKey)}
              style={{
                float: "right",
                marginLeft: 10,
                height: 25,
                width: 75,
                padding: "2px 3px 4px 3px",
                backgroundColor: "rgb(147, 33, 33)",
                color: "#ccc",
                fontWeight: 400,
                letterSpacing: ".04rem"
              }}
            >
              DELETE
            </button>
          </span>
        </div>
        {/* CARD BOTTOM SECTION */}
        <div className="card-header p-1 pl-2 text-left">
          {/* NEARPLACENAME COUNTRYCODE POSTALCODE (DISTANCE km) */}
          {/* GoogleMaps directions from nearest city to feature */}
          <a
            href={`https://www.google.com/maps/dir/?api=1&origin=${props.nearPlaceLatLong}&destination=${props.featureLatitude},${
              props.featureLongitude
            }`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#888", textDecoration: "none", fontWeight: 400 }}
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
            <span className="float-right" style={{ color: "rgb(51, 103, 181)", fontWeight: 500 }}>
              {props.nearPlaceWifi}
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
