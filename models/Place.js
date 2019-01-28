const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  email: { type: String, required: true },
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

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
