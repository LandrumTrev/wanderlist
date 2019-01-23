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
            <a
              href={`https://www.google.com/search?q=Ensenada Mogotes`}
              target="_blank"
              style={{ color: "rgb(121, 27, 27)", fontWeight: 500, textDecoration: "none" }}
            >
              Ensenada Mogotes
              {/* ${card.featureName} */}
            </a>
            <a
              href={`https://www.google.com/search?q=bay`}
              target="_blank"
              style={{ color: "rgb(162, 155, 99)", fontWeight: 100, textDecoration: "none" }}
            >
              &nbsp;(bay)&nbsp;
              {/* ${card.featureType} */}
            </a>
            <a
              href={`https://www.google.com/search?q=Argentina`}
              target="_blank"
              style={{ color: "rgb(29, 68, 126)", fontWeight: 300, textDecoration: "none" }}
            >
              :&nbsp;Argentina
              {/* ${card.featureCountryName} */}
            </a>
          </h5>
          {/* LONGITUDE AND LATITUDE */}
          <span className="font-weight-light" style={{ display: "inline", float: "right" }}>
            <a
              href={`https://www.google.com/maps/@-38.13333,-57.56667,15z`} 
              target="_blank"
              style={{ color: "rgb(29, 68, 126)" }}
            >
            -38.13333, -57.56667
              {/* ${card.featureLatitude}, ${card.featureLongitude} */}
            </a>
          </span>
        </div>
        <div className="card-body text-success p-1">
          <p>bottom content</p>
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
    <div
    // style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    // className="jumbotron"
    >
      {children}
    </div>
  );
}
