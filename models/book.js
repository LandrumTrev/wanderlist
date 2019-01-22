// the Mongoose model used to create and query a MongoDB "books" collection

// require Mongoose to use it's Schema constructor and .model() definition methods
const mongoose = require("mongoose");
// require the Mongoose Schema constructor to define Mongo model properties
const Schema = mongoose.Schema;

// define (construct) a new Schema to be used by the Book model
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

// after describing the bookSchema, assign it to a new Mongoose model named "Book"
// this will cause MongoDB to create a collection called "books"
const Book = mongoose.model("Book", bookSchema);

// export the model defined above as value of this file 
// (will be imported and bundled by models/index.js)
module.exports = Book;
