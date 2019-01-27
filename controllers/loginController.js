const db = require("../models");
const User = require("../models/User");
const UserSession = require("../models/UserSession");

// Defining methods for the loginController
module.exports = {
  //************************************************************/
  //* Allow users to self register
  //************************************************************/
  signUp: (req, res) => {
    // body is req.body
    const { body } = req;
    // firstName, lastName, password, and email are
    // firsname.req.body, etc
    const { firstName, lastName, password } = body;
    let { email } = body;

    // if no data sent for each field, res.data.success is false, send error message
    // these shouldn't activate, since form requires all data to activate submit button
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
    email = email.toLowerCase();

    // if data exists for each field in req.body, then

    // check to see if that email already exists in db, and if so, send error
    db.User.find(
      {
        email: email
      },
      (err, exists) => {
        if (err) {
          return res.send({
            success: false,
            message: "ERROR:  Server error (db.User.find)"
          });
        } else if (exists.length > 0) {
          return res.send({
            success: false,
            message: "ERROR:  Account requested does not meet requriements"
          });
        }
      }
    );

    // as long as email doesn't already exist in db, then

    // construct a new User document for the db
    const newUser = new User();
    // attach req.body.xxx data to the new User
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.email = email;
    // have the User models generateHash() use bcrypt to hash the password
    newUser.password = newUser.generateHash(password);
    // have mongoose save the new User to the db
    newUser.save((err, user) => {
      // if error
      if (err) {
        console.log(err);
        return res.send({
          success: false,
          message: "ERROR:  Server error (newUser.save)"
        });
      }
      // if save is successful, send res.data.success : true
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
    // body is req.body
    const { body } = req;
    // password is req.body.password
    const { password } = body;
    // email is req.body.email
    let { email } = body;

    console.log("email = " + email + "  password = " + password);

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

    User.find(
      {
        email: email
      },
      (err, users) => {
        //      console.log("Found user = " + users);
        if (err) {
          return res.send({
            success: false,
            message: "ERROR:  Server error"
          });
        }
        if (users.length != 1) {
          return res.send({
            success: false,
            message: "ERROR:  Unable to process login."
          });
        }

        const user = users[0];
        //      console.log("password supplied = " + password);
        if (!user.validPassword(password, user.password)) {
          return res.send({
            success: false,
            message: "ERROR:  Invalid login."
          });
        }

        const userSession = new UserSession();
        userSession.userId = user._id;
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
    const { body } = req;
    const { token } = body;
    // console.log(req);
    // console.log("Token = " + token);

    UserSession.find(
      {
        _id: token,
        isDeleted: false
      },
      (err, sessions) => {
        if (err) {
          // console.log("fail 1");
          return res.send({
            success: false,
            message: "ERROR:  Unable to obtain user token."
          });
        }

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
    const { query } = req;
    const { token } = query;

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

        return res.send({
          success: true,
          message: "Successfully logged out."
        });
        // };
      }
    );
  }
};
