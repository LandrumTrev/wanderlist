const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// API Routes
// Matches with "/api/auth/signup"
router
  .route("/signup")
  .post(loginController.signUp);


// Matches with "/api/auth/signin"
router
  .route("/signin")
  .post(loginController.signIn);


// Matches with "/api/auth/verify"
router
  .route("/verify")
  .post(loginController.verify);


// Matches with "/api/auth/logout"
router
  .route("/logout")
  .post(loginController.logout);

module.exports = router;