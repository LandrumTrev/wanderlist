// Search contains SelectRegion and SelectFeature components

import React from "react";
import "./style.css";

// ===================================================================
// SelectRegion component
// ===================================================================

export function SelectRegion(props) {
  // console.log(props.list);
  // console.log(props.thisRegion);

  return (
    <>
      <select name="countryAndRegion" className="custom-select" onChange={props.thisRegion}>
        {props.list.map(region => (
          // where every region gets an <option> element with a key for React
          // an <li> with Bootstrap "list-group-item"
          <option value={region.value} key={region.value}>
            {region.name}
          </option>
        ))}
      </select>
      <div className="input-group-append">
        <span className="input-group-text" style={{ width: "5rem" }}>
          region
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
      <select name="featureCode" className="custom-select" onChange={props.thisFeature}>
        {props.list.map(feature => (
          // where every region gets an <option> element with a key for React
          // an <li> with Bootstrap "list-group-item"
          <option value={feature.value} key={feature.value}>
            {feature.name}
          </option>
        ))}
      </select>
      <div className="input-group-append">
        <span className="input-group-text" style={{ width: "5rem" }}>
          region
        </span>
      </div>
    </>
  );
}
