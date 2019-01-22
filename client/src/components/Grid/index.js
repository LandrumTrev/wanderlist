import React from "react";

// Exports the Container, Row, and Col components

// Container component creates a Bootstrap container or container-fluid
// Container can be either <Container> or <Container fluid>
// Container can contain child elements between it's open and close tags {children}
export function Container({ fluid, children }) {
  // if <Container fluid> then return <div class="container-fluid"> ... </div>
  // otherwise return <div class="container"> ... </div>
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Row component lets us use a Bootstrap row without having to think about class names
// !!! row-fluid is OLD BOOTSTRAP (2.x), no class="row-fluid" in Bootstrap 4
export function Row({ children }) {
  return <div className={"row"}>{children}</div>;
  // return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Col component lets us size Bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">

// example to demo what can be done to create custom Component properties
// make the class (className) the value of size (md-12 lg-6) or whatever
// and split into an array at spaces " ", so ["md-12", "lg-6"]
// then do a map on that array, calling each element "size" (BAD CODE! CONFUSING)
// and have the map create a new array with "col-" tacked onto each element, so
// ["col-md-12", "col-lg-6"] is the new mapped array,
// then .join that array back into a space " " separated string: "col-md-12 col-lg-6"
// so that <div className="col-md-12 col-lg-6"> {children} </div> is returned
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
