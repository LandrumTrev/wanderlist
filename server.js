// express web server for node.js
const express = require("express");
// app is express server invoked
const app = express();
// mongoose ODM interface for MongoDB
const mongoose = require("mongoose"); 
// all API and HTML routes
const routes = require("./routes");
// production OR local PORT
const PORT = process.env.PORT || 3001;

// express server can use URLs encoded with other data
app.use(express.urlencoded({ extended: true }));
// express server can handle JSON data
app.use(express.json());

// for production builds, get static files from /client/build/
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// express server uses HTML and API routes 
// defined in routes/index.js
app.use(routes);

// mongoose connects to MongoDB (production OR local)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// express server listening on PORT (localhost:3001)
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
