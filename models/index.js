// this file collects all MongoDB collection models into a single file
// require all Models defined in the /models/ directory,
// and then export them all from this file (models/index.js)
// where they can be referenced as db.Modelname when this file is imported

// list (Name, and require .js file) all Models from models dir
// and export them as the value of this file (index.js of models dir)
module.exports = {
  User: require("./User"),
  UserSession: require("./UserSession"),
  Book: require("./book"),
  Place: require("./place")
};