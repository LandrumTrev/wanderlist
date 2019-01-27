// MAIN ROUTER: ALL ROUTES START HERE (required by express server.js)

// path.join used to attach domain to HTML path for React (production)
const path = require("path");
// Express Router has routing info attached to it
const router = require("express").Router();
// require all other API routes
const apiRoutes = require("./api");

// all other API routes attached to Express Router
router.use("/api", apiRoutes);

// (production only) all HTML routes sent to React client production build
// HTML routes are all other routes that don't start with /api
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// make routes attached as router.use() available to server
module.exports = router;
