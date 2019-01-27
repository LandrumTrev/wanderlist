// MAIN ROUTER: ALL ROUTES START HERE (required by express server.js)

// path.join used to attach domain to HTML path for React (production)
const path = require("path");
// Express Router has routing info attached to it
const router = require("express").Router();
// require the controller methods for user authentication /api/xxx routes
const loginController = require("../controllers/loginController");
// require all other API routes
const apiRoutes = require("./api");

// attach all user authentication /api/xxx routes
// /api/signup route creates a new User if email does not exist in db "users"
router
  .route("/api/signup")
  .post(loginController.signUp);

// /api/signin route uses bcrypt to match login info hash with db User info hash
router
  .route("/api/signin")
  .post(loginController.signIn);

// /api/verify route allows component to check for UserSession isDeleted: false
router
  .route("/api/verify")
  .post(loginController.verify);

// /api/logout route sets UserSession model's isDeleted: true
router
  .route("/api/logout")
  .post(loginController.logout);

// all other API routes attached to Express Router
router.use("/api", apiRoutes);

// (production only) all HTML routes sent to React client production build
// HTML routes are all other routes that don't start with /api
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// make routes attached as router.use() available to server
module.exports = router;
