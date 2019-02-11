// Search component
// contains SelectRegion and SelectFeature search feature select lists

import React from "react";

// ===================================================================
// SelectCountryName component
// ===================================================================

export function SelectCountryName(props) {
  // console.log("countries and regions:");
  // console.log(props.list);

  const countries = props.list.filter(country => country.value.length === 2);
  // console.log("countries:");
  // console.log(countries);

  return (
    <>
      <select name="countryCC" className="custom-select" onChange={props.thisCountry} style={{ borderRadius: 0, borderWidth: 0 }}>
        {countries.map(country => (
          // where every country gets an <option> element with a key for React
          <option value={country.value} key={country.value}>
            {country.name}
          </option>
        ))}
      </select>
      <div className="input-group-append">
        <span
          className="input-group-text"
          style={{ width: "5.7rem", borderRadius: 0, fontWeight: 800, fontSize: 12, borderWidth: 0, letterSpacing: ".07rem" }}
        >
          COUNTRY
        </span>
      </div>
    </>
  );
}

// ===================================================================
// SelectCountryRegion component
// ===================================================================

export function SelectCountryRegion(props) {
  console.log(props);

  console.log("selectedCountry:");
  console.log(props.selectedCountry);

  const allRegions = props.list.filter(region => region.value.length === 4);
  console.log("allRegions:");
  console.log(allRegions);

  const countryRegions = allRegions.filter(region => region.value.substring(0, 2) === props.selectedCountry);
  console.log("countryRegions:");
  console.log(countryRegions);

  return (
    <>
      <select name="regionCC" className="custom-select" onChange={props.thisRegion} style={{ borderRadius: 0, borderWidth: 0 }}>

        <option value="" key="">
          search entire country
        </option>

        {countryRegions.map(region => (
          // where every country gets an <option> element with a key for React
          <option value={region.value} key={region.value}>
            {region.name}
          </option>
        ))}
      </select>
      <div className="input-group-append">
        <span
          className="input-group-text"
          style={{ width: "5rem", borderRadius: 0, fontWeight: 800, fontSize: 12, borderWidth: 0, letterSpacing: ".07rem" }}
        >
          REGION
        </span>
      </div>
    </>
  );
}

// ===================================================================
// SelectFeatureCategory component
// ===================================================================

export function SelectFeatureCategory(props) {
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
          style={{
            width: "5rem",
            borderRadius: 0,
            fontWeight: 700,
            fontSize: 12,
            backgroundColor: "rgba(215, 31, 31, 0.9)",
            color: "#fff",
            borderWidth: 0,
            letterSpacing: ".06rem"
          }}
          onClick={props.findFeature}
        >
          SEARCH
        </button>
      </div>
    </>
  );
}

// ===================================================================
// SelectFeatureName component
// ===================================================================

export function SelectFeatureName(props) {
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
          style={{
            width: "5rem",
            borderRadius: 0,
            fontWeight: 700,
            fontSize: 12,
            backgroundColor: "rgba(215, 31, 31, 0.9)",
            color: "#fff",
            borderWidth: 0,
            letterSpacing: ".06rem"
          }}
          onClick={props.findFeature}
        >
          SEARCH
        </button>
      </div>
    </>
  );
}
