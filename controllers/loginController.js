// https://github.com/Steven-M-Carpenter/LoginCode

const db = require("../models");
// const User = require("../models/User");
// const UserSession = require("../models/UserSession");

// Defining methods for the loginController
module.exports = {
  //************************************************************/
  //* Allow users to self register
  //************************************************************/
  signUp: (req, res) => {
    // console.log("body = " + JSON.stringify(req.body));

    // body is req.body
    const { body } = req;
    // firstName is req.body.firstName, etc
    const { firstName, lastName, password } = body;
    // email is req.body.email
    let { email } = body;

    // error handling--user must fill out all info
    if (!firstName) {
      return res.send({
        success: false,
        message: "ERROR: You must specify a first name."
      });
    }
    if (!lastName) {
      return res.send({
        success: false,
        message: "ERROR: You must specify a last name."
      });
    }
    if (!email) {
      return res.send({
        success: false,
        message: "ERROR: You must specify an email address."
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: "ERROR: You must specify a password."
      });
    }
    // remove all caps from email address
    email = email.toLowerCase();

    // once info is collected (above), make mongoose MongoDB call
    // check to see if submitted email already exists in "users" collection
    db.User.find(
      {
        email: email
      },
      (err, exists) => {
        if (err) {
          return res.send({
            success: false,
            message: "ERROR:  Server error"
          });
        } else if (exists.length > 0) {
          return res.send({
            success: false,
            message: "ERROR:  Account requested does not meet requriements"
          });
        }
      }
    );

    // construct a new User model document for users collection
    const newUser = new User();
    // attach entered info to the new User document variable
    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.password = newUser.generateHash(password);
    // have mongoose create the new User document in the users collection
    newUser.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: "ERROR:  Server error"
        });
      }
      return res.send({
        success: true,
        message: "Signup complete!"
      });
    });
  },

  //************************************************************/
  //* Process user Sign-in and create auth token for them
  //************************************************************/
  signIn: (req, res) => {
    // body var is req.body
    const { body } = req;
    // password is req.body.password
    const { password } = body;
    // email is req.body.email
    let { email } = body;

    // console the email and password submitted on signIn
    console.log("email = " + email + "  password = " + password);

    // if user doesn't enter an email or password, send error message
    if (!email) {
      return res.send({
        success: false,
        message: "ERROR: You must specify an email address."
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: "ERROR: You must specify a password."
      });
    }
    email = email.toLowerCase();

    // mongoose: find an email in users collection (returns an array, "users")
    User.find(
      {
        email: email
      },
      (err, users) => {
        // console the user document found by User.find()
        // console.log("Found user = " + users);
        if (err) {
          return res.send({
            success: false,
            message: "ERROR:  Server error"
          });
        }
        // if User.find() doesn't find exactly 1 document, error message
        if (users.length != 1) {
          return res.send({
            success: false,
            message: "ERROR:  Unable to process login."
          });
        }

        // select the first (and only) object in the users array returned
        const user = users[0];
        // console the password entered for signIn
        // console.log("password supplied = " + password);
        // if the User method validPassword fails, error message
        if (!user.validPassword(password, user.password)) {
          return res.send({
            success: false,
            message: "ERROR:  Invalid login."
          });
        }

        // if email and password both validate, then
        // create a new UserSession document in the db
        const userSession = new UserSession();
        // set the userId as the User's document MongoDB _id
        userSession.userId = user._id;
        // save the new userSession document to the MongoDB
        userSession.save((err, doc) => {
          if (err) {
            return res.send({
              success: false,
              message: "ERROR:  Server error"
            });
          }
          return res.send({
            success: true,
            message: "User login is complete",
            token: doc._id
          });
        });
      }
    );
  },

  //************************************************************/
  //* Verify validity of a user's token if presented
  //************************************************************/
  verify: (req, res) => {
    // body is req.body
    const { body } = req;
    // console.log(req);

    // token is req.body.token
    const { token } = body;
    // console.log("Token = " + token);

    // use token to match UserSession document's MongoDB _id
    UserSession.find(
      {
        _id: token,
        isDeleted: false
      },
      (err, sessions) => {
        if (err) {
          // console server error
          // console.log("fail 1");
          return res.send({
            success: false,
            message: "ERROR:  Unable to obtain user token."
          });
        }
        // if number of documents returned (objects in array) is not exactly 1,
        // then error message. Otherwise return success message.
        if (sessions.length != 1) {
          // console.log("Session length = " + sessions.length);
          return res.send({
            success: false,
            message: "ERROR:  Unable to verify session."
          });
        } else {
          // console.log("success 3");
          return res.send({
            success: true,
            message: "Successfully verified session token."
          });
        }
      }
    );
  },

  //************************************************************/
  //* Process logout and invalidate user token in DB
  //************************************************************/
  logout: (req, res) => {
    // query is req.query
    const { query } = req;
    // token is req.query.token
    const { token } = query;

    // to end UserSession, find the usersessions document by it's _id (token)
    // and change isDeleted from false to true
    UserSession.findOneAndUpdate(
      {
        _id: token,
        isDeleted: false
      },
      {
        $set: { isDeleted: true }
      },
      null,
      (err, sessions) => {
        if (err) {
          return res.send({
            success: false,
            message: "ERROR:  Unable to obtain user token."
          });
        }
        // if successful, send log out success message
        return res.send({
          success: true,
          message: "Successfully logged out."
        });
      }
    );
  }
};
