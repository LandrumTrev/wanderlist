const router = require("express").Router();
const placesController = require("../../controllers/placesController");

// Matches with "/api/places"
router
  .route("/")
  // .get(placesController.findAll)
  .post(placesController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
