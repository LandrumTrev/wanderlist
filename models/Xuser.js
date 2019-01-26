// // the Mongoose model used to create and query a MongoDB "users" collection

// // require Mongoose to use it's Schema constructor and .model() definition methods
// const mongoose = require("mongoose");
// // used to define Mongo model properties
// const Schema = mongoose.Schema;
// // used by Passport and bcrypt to validate hashed user login values
// const uniqueValidator = require("mongoose-unique-validator");
// // used to create hashed username and passport values
// const bcrypt = require("bcrypt");

// // User mongoose model Schema
// const UserSchema = new Schema({
//   username: { type: String, required: true, unique: true },
//   passwordHash: { type: String, required: true }
// });

// // tell the mongoose model Schema to use a plugin, the mongoose-unique-validator
// UserSchema.plugin(uniqueValidator);

// // add a method to the mongoose User model schema
// // that returns the bcrypt method to compare an entered password to the stored password
// UserSchema.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.passwordHash);
// };

// // use a virtual value "password" (change this value to something unique?) to seed the hash
// // to generate the hash of the password. 
// // "12" is current security level (hash gen iterations); increase for better security
// UserSchema.virtual("password").set(function(value) {
//   this.passwordHash = bcrypt.hashSync(value, 12);
// });

// // create variable which generates the mongoose model from the UserSchema, and names it "User"
// const User = mongoose.model("User", UserSchema);

// // export the model defined above as value of this file 
// // (will be imported and bundled by models/index.js)
// module.exports = User;
