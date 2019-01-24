// Search contains SelectRegion and SelectFeature components

import React from "react";
import "./style.css";

// ===================================================================
// SelectRegion component
// ===================================================================

export function SelectRegion(props) {
  // console.log(props.list);

  return (
    <>
      <select className="custom-select">
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
      <select className="custom-select">
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
