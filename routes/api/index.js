// this is the bundler file for all route files in the api/ directory
// imported by routes/index.js (all routes, api and html, passed to server)
// imports routes/api/books.js which handles api/books/... routes

// require the Express Router (NOT React Router) to include routes imported here
const router = require("express").Router();

// /api/books/xxx routes
const bookRoutes = require("./books");
router.use("/books", bookRoutes);

// /api/auth/xxx for user authentication
const authRoutes = require("./auth");
router.use("/auth", authRoutes);

// /api/places/xxx routes for user's saved places
const placeRoutes = require("./places");
router.use("/places", placeRoutes);

// export the router with /books path added as value of this file
module.exports = router;
