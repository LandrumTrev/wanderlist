// Search component
// contains SelectRegion and SelectFeature search feature select lists

import React from "react";

// ===================================================================
// SelectRegion component
// ===================================================================

export function SelectRegion(props) {
  // console.log(props.list);
  // console.log(props.thisRegion);

  return (
    <>
      <select name="countryAndRegion" className="custom-select" onChange={props.thisRegion} style={{ borderRadius: 0, borderWidth: 0 }}>
        {props.list.map(region => (
          // where every region gets an <option> element with a key for React
          <option value={region.value} key={region.value}>
            {region.name}
          </option>
        ))}
      </select>
      <div className="input-group-append">
        <span 
          className="input-group-text" 
          style={{ width: "5rem", borderRadius: 0, fontWeight: 800, fontSize: 12, borderWidth: 0, letterSpacing: ".07rem"  }}>
          REGION
        </span>
      </div>
    </>
  );
}

// ===================================================================
// SelectFeature component
// ===================================================================

export function SelectFeature(props) {
  // console.log(props.list);

  return (
    <>
      <select name="featureCode" className="custom-select" onChange={props.thisFeature} style={{ borderRadius: 0, borderWidth: 0 }}>
        {props.list.map(feature => (
          // where every feature gets an <option> element with a key for React
          <option value={feature.value} key={feature.value}>
            {feature.name}
          </option>
        ))}
      </select>
      <div className="input-group-append">
        <button
          className="input-group-text btn btn-primary"
          style={{ width: "5rem", borderRadius: 0, fontWeight: 700, fontSize: 12, backgroundColor: "rgba(215, 31, 31, 0.9)", color: "#fff", borderWidth: 0, letterSpacing: ".06rem" }}
          onClick={props.findFeature}
        >
          SEARCH
        </button>
      </div>
    </>
  );
}
