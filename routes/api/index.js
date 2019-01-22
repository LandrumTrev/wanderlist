// this is the bundler file for all route files in the api/ directory
// imported by routes/index.js (all routes, api and html, passed to server)
// imports routes/api/books.js which handles api/books/... routes

// require the Express Router (NOT React Router) to include routes imported here
const router = require("express").Router();
// include all routes defined in routes/api/books.js for use by Express Router
const bookRoutes = require("./books");

// tell Express router that all paths that start with /books/...
// use routings defined in routes/api/books.js (bookRoutes)
router.use("/books", bookRoutes);

// export the router with /books path added as value of this file
module.exports = router;
