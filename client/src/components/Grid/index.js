// Grid component
// creates Bootstrap Container, Row, and Col class components

import React from "react";

// Bootstrap Container component
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// Bootstrap Row component
export function Row({ children }) {
  return <div className={"row mt-2"}>{children}</div>;
}

// Bootstrap Col component
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
// export function Col({ size, children }) {
//   return (
//     <div
//       className={size
//         .split(" ")
//         .map(size => "col-" + size)
//         .join(" ")}
//     >
//       {children}
//     </div>
//   );
// }
