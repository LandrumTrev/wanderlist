// SUB-ROUTER FOR ALL API ROUTES 
// required by main router: routes/index.js

// include Express Router to attach routes to it
const router = require("express").Router();
// require the controller methods for user authentication /api/xxx routes
const loginController = require("../controllers/loginController");
// require all routes for /api/books/xxx
const bookRoutes = require("./books");

// attach /api/books/xxx routes to Express Router
router.use("/books", bookRoutes);

// attach all user authentication /api/xxx routes
// /api/signup route creates a new User if email does not exist in db "users"
router
  .route("/signup")
  .post(loginController.signUp);

// /api/signin route uses bcrypt to match login info hash with db User info hash
router
  .route("/signin")
  .post(loginController.signIn);

// /api/verify route allows component to check for UserSession isDeleted: false
router
  .route("/verify")
  .post(loginController.verify);

// /api/logout route sets UserSession model's isDeleted: true
router
  .route("/logout")
  .post(loginController.logout);


// export router for use by main router: routes/index.js
module.exports = router;
