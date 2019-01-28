const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // create: (req, res) => {
  //   // req.body.featureName
  //   // let { featureName } = req.body;
  //   // req.body.email
  //   // let { email } = req.body;
  //   // check to see if that featureName already exists in db, and if so, send fail
  //   db.Place.find(
  //     {
  //       featureName: req.body.featureName,
  //       email: req.body.email
  //     },
  //     (err, exists) => {
  //       if (err) {
  //         return res.send({
  //           success: false,
  //           message: "ERROR:  Server error (db.Place.find)"
  //         });
  //       } else if (exists.length > 0) {
  //         return res.send({
  //           success: false,
  //           message: "ERROR:  Place already exists in user's saved places"
  //         });
  //       }
  //     }
  //   );
  //   // and as long as email doesn't already exist in db, then
  //   db.Place.create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  //   // db.Place.create(req.body)
  //   //   .then(dbModel => {
  //   //     res.send({
  //   //       success: true,
  //   //       message: "Place saved to user's places!"
  //   //     });
  //   //   })
  //   //   .catch(err => {
  //   //     console.log(err);
  //   //     res.send({
  //   //       success: false,
  //   //       message: "ERROR:  Server error (db.Place.create)"
  //   //     });
  //   //   });
  // }
  // findAll: function(req, res) {
  //   db.Book
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.Book
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function(req, res) {
    db.Place.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  //,
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
