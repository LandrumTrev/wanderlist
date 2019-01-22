// client/src/utils/API.js uses axios to make these API calls to the Express server

// this file is referenced (bundled) by routes/api/index.js which bundles all api routes,
// and then that file is referenced by routes/index.js with bundles all api and html routes
// and then routes/index.js is imported into server.js for access to all routes

// end point for domain.com/api/books/... routes, accepts both routes:
// domain.com/api/books
// and
// domain.com/api/books/:id
// where :id is the id of a particular book

// this file calls methods defined in controllers/booksController.js
// which make calls to db.Books collection (MongoDB via Mongoose)
// here, the type of API call is also differentiated: GET, POST, PUT, DELETE
// and the appropriate method is called

// require Express Router to use routings attached to it
const router = require("express").Router();

// controllers/booksController.js methods handle route calls based on the type of request
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
// and handles both GET and POST calls to that route
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
// and handles GET, PUT, and DELETE calls to that route
router.route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

// export router as value of this file to add it's routing instructions to Express Router
module.exports = router;
