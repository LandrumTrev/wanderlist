// // require Mongoose to talk to the MongoDB
// const mongoose = require("mongoose");
// // require all Models, access a Model as db.ModelName
// const db = require("../models");

// // This file empties the Books collection and inserts the books below
// // to seed the production db, use this line in server's package.json:
// // "heroku-postbuild": "npm run build && node scripts/seedDB.js"

// // connect to the db
// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/wanderlist"
// );

// // data to be seeded
// const bookSeed = [
//   {
//     title: "Harry Potter and the Sorcerer's Stone",
//     author: "J.K. Rowling",
//     synopsis:
//       "Harry Potter has no idea how famous he is.",
//     date: new Date(Date.now())
//   },
//   {
//     title: "Coraline",
//     author: "Neil Gaiman",
//     synopsis:
//       "When Coraline steps through a door to find another house strangely similar to her own (only better), things seem marvelous.",
//     date: new Date(Date.now())
//   }
// ];

// // Mongoose commands to run on the Model collection to be seeded
// db.Book
//   // remove all existing documents in books collection
//   .remove({})
//   // then insert all document objects in the bookSeed array (above)
//   .then(() => db.Book.collection.insertMany(bookSeed))
//   // then take the response (data) and 
//   .then(data => {
//     // console the number (data.result.n) of documents inserted into books collection
//     console.log(data.result.n + " records inserted!");
//     // then terminate this database connection session with (0)
//     process.exit(0);
//   })
//   // or if there is an error,
//   .catch(err => {
//     // console the error
//     console.error(err);
//     // and exit the session with (1)
//     process.exit(1);
//   });
