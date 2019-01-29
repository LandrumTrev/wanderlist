// SUB-ROUTER FOR ALL API ROUTES
// required by main router: routes/index.js

// include Express Router to attach routes to it
const router = require("express").Router();

// controller for user authentication routes methods
const loginController = require("../../controllers/loginController");

// require all routes in /api/places.js
const placeRoutes = require("./places");
// const placesController = require("../../controllers/placesController");

// api routes for user authentication
router.route("/signup").post(loginController.signUp);
router.route("/signin").post(loginController.signIn);
router.route("/verify").post(loginController.verify);
router.route("/logout").post(loginController.logout);

// router.route("/places").post(placesController.create);

// attach /api/books/xxx routes to Express Router
router.use("/places", placeRoutes);

// export router for use by main router: routes/index.js
module.exports = router;
