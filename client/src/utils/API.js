import axios from "axios";

export default {
  // get all user's places from db
  findSaved: query => {
    return axios.get("/api/places", { data: { query } });
    // return axios.get("/api/places?" + query);
  },
  // get all user's places from db
  deletePlace: query => {
    return axios.delete("/api/places/", { data: { query } });
  },
  // save a place to db
  savePlace: query => {
    return axios.post("/api/places", query);
  },
  // user auth login route
  getUser: query => {
    return axios.post("/api/signin", query);
  },
  // user auth login route
  logOut: query => {
    return axios.post("/api/logout", query);
  },
  // user auth create new user route
  createUser: query => {
    return axios.post("/api/signup", query);
  },
  // user auth verify allowed access route
  checkAuth: function(query) {
    return axios.post("/api/verify", query);
  }
  // ,
  // // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // Deletes the book with the given id
  // deleteBook: function(id) {
  // return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
