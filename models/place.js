// the Mongoose model used to create and query a MongoDB "places" collection

// require Mongoose to use it's Schema constructor and .model() definition methods
const mongoose = require("mongoose");
// require the Mongoose Schema constructor to define Mongo model properties
const Schema = mongoose.Schema;

// define (construct) a new Schema to be used by the Book model
const placeSchema = new Schema({
  user: { type: String, required: true },
  featureName: { type: String, required: true },
  featureType: { type: String, required: true },
  featureCountryName: { type: String, required: true },
  featureLatitude: { type: String, required: true },
  featureLongitude: { type: String, required: true },
  nearPlaceName: { type: String },
  nearPlaceCountryCode: { type: String },
  nearPlacePostalCode: { type: String },
  nearPlaceDistance: { type: String },
  nearPlaceLatLong: { type: String },
  nearPlaceWifi: { type: String }
});

// after describing the bookSchema, assign it to a new Mongoose model named "Book"
// this will cause MongoDB to create a collection called "books"
const Place = mongoose.model("Place", placeSchema);

// export the model defined above as value of this file 
// (will be imported and bundled by models/index.js)
module.exports = Place;


// demo values:
// title: { type: String, required: true },
// author: { type: String, required: true },
// synopsis: String,
// date: { type: Date, default: Date.now }
