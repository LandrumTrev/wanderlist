const router = require("express").Router();
const placesController = require("../../controllers/placesController");
// this file calls the placesController.js file which defines the model db calls
// and called by the client/src/utils/API.js file which makes axios calls to these route endpoints

// Matches with "/api/places/"
router
  .route("/")
  .get(placesController.findSaved)
  .post(placesController.create)
  .delete(placesController.deletePlace);

// Matches with "/api/books/:id"
// router
// .route("/:pKey")
//   .get(booksController.findById)
//   .put(booksController.update)
// .delete(placesController.remove);

module.exports = router;

