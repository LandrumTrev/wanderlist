// require the Express Server module to use both it and it's methods
const express = require("express");
// create a reference to the invoked Express Server function
const app = express();

// require the Mongoose ODM in order to interface with the MongoDB
const mongoose = require("mongoose");
// require all routes (html and API) bundled in routes/index.js
const routes = require("./routes");
// define the PORT for Express Server to listen on,
// either as defined by the private production .env file,
// or 3001 if not production process .env (localhost)
const PORT = process.env.PORT || 3001;

// invoke Express and tell it to use html URLs, including those with encoded data
// by using its own .urlencoded() method
app.use(express.urlencoded({ extended: true }));
// invoke Express and tell it to accept JSON data (using its own .json() method)
app.use(express.json());

// if the server is running on a production build 
// (ie, there is a .env with NODE_ENV defined as "production"),
if (process.env.NODE_ENV === "production") {
  // then allow Express to serve static files (html, css, js) from the client/build folder
  app.use(express.static("client/build"));
}

// have Express server (app) use all routes (html and API) bundled by the routes/index.js file
app.use(routes);

// when server starts, create a connection to the MongoDB using Mongoose
// for deployed sites (with a process.env) use connection assigned to MONGODB_URI in the .env
// OR for local dev, use the local db at mongodb://localhost/dbname
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wanderlist");

// tell Express (app) to listen at defined PORT above (prod OR dev)
// and on server start execute whatever is in the callback function
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
