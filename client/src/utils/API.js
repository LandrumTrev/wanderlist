import axios from "axios";

export default {
  // user auth login route
  getUser: query => {
    return axios.post("/api/signin", query);
  },
  // user auth create new user route
  createUser: query => {
    return axios.post("/api/signup", query);
  },
  // user auth verify allowed access route
  checkAuth: function(query) {
    console.log("Quer in API = " + JSON.stringify(query));
    return axios.post("/api/verify", query);
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
