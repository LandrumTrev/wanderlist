// SUB-ROUTER FOR ALL API ROUTES 
// required by main router: routes/index.js

// include Express Router to attach routes to it
const router = require("express").Router();
// require all routes for /api/books/xxx
const bookRoutes = require("./books");

// attach /api/books/xxx routes to Express Router
router.use("/books", bookRoutes);

// export router for use by main router: routes/index.js
module.exports = router;
