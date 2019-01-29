const db = require("../models");

// placesController defines end point methods for /api/places/ routes
// and make the actual database calls via mongoose Model methods
// this file is required by the routes/api/places.js places routes endpoint file
module.exports = {
  create: function(req, res) {
    // console.log(req.body);
    db.Place.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findSaved: function(req, res) {
    // console.log(req.body);
    // console.log(req.body.data);
    db.Place.find(req.body.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  deletePlace: function(req, res) {
    // console.log(req.body.query);
    db.Place.deleteOne(req.body.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
