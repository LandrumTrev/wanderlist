// this file is imported into server.js as all routes (api and html)

// require path to create HTML paths to client/build files for production
const path = require("path");
// require the Express Router (NOT the React Router!)
// so Express can use the API (and production-only HTML) routes included here
const router = require("express").Router();
// and include the bundler for all API routes for the Express Router to use
const apiRoutes = require("./api");

// API Routes (for both dev and production use)
// all routes that are structured: domain.com/api/... 
// route them to apiRoutes (routes/api/index.js) for further routing
// define this before html routes, since html routes are all other routes not beginning with /api/...
router.use("/api", apiRoutes);

// for production build: all routes that don't start with domain.com/api/
// send them to React's index.html where React.Router will sort them out
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// export router with it's added api routes and (produciton) html routes
// to be used as route starting points when imported into server.js
module.exports = router;
