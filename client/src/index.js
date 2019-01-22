// React's direct connection to the public/index.html file
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// App is the master component containing elements that occur on all pages,
// as well as the React Router to load page views based on the URL path.
// Render everything in App to the <div id="root"> in the index.html file
ReactDOM.render(<App />, document.getElementById("root"));
