// this is the middleman between the API route endpoint (routes/api/books.js)
// which calls these methods based on pathname and type of API call,
// and the Mongoose model used to interact with the books collection in the Mongo db
// Mongoose is required in the required Model .js itself, so not required here

// models/index.js is imported as "db" to have access to all Models in the models/ dir
const db = require("../models");

// Define Mongoose methods for the booksController used by routes/api/books.js
module.exports = {
  findAll: function(req, res) {
    db.Book
      // Model.find(query, fields, options, callback)
      // GET on "/" : query is empty, so Mongoose finds all documents in collection
      .find(req.query)
      // -1 or "descending" or "desc" for greatest value first
      // 1 or "ascending" or "asc" for smallest value first
      .sort({ date: -1 })
      // call the returned data "dbModel" return it as a JSON value of call (res)
      .then(dbModel => res.json(dbModel))
      // or if an error occurs, catch it without crashing the rest of the app
      // and mark it as status 422 (Unprocessable Entity)
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      // Model.findById(id, fields, options, callback)
      // GET on "/:id" : use /:id to find one item
      .findById(req.params.id)
      // call the found document dbModel and return it as JSON as the (res) of the call
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      // POST on "/" : uses data in the request body to create a new document
      .create(req.body)
      // call the returned data from created document "dbModel" and return as JSON
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      // Model.findOneAndUpdate(conditions, update, (options), callback)
      // PUT on "/:id" : updates an existing document (conditions uses /:id to find)
      // and SET (change only field(s) specified) new data included in request body
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      // call the updated document "dbModel" and return JSON as (res)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      // DELETE on "/:id" : finds a document by its MongoDB _id
      // !!! SHOULD BE .findOne({ _id: req.params.id })
      // !!! OR .findById(req.params.id)
      .findById({ _id: req.params.id })
      // then call that document "dbModel" and remove it
      .then(dbModel => dbModel.remove())
      // then return the removed document "dbModel" as (res) JSON data
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
