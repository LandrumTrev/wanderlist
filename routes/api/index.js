// SUB-ROUTER FOR ALL API ROUTES
// required by main router: routes/index.js

// include Express Router to attach routes to it
const router = require("express").Router();

// controller for user authentication routes methods
const loginController = require("../../controllers/loginController");

// require all routes for /api/books/xxx
const bookRoutes = require("./books");

// api routes for user authentication
router.route("/signup").post(loginController.signUp);
router.route("/signin").post(loginController.signIn);
router.route("/verify").post(loginController.verify);
router.route("/logout").post(loginController.logout);

// attach /api/books/xxx routes to Express Router
router.use("/books", bookRoutes);

// export router for use by main router: routes/index.js
module.exports = router;
