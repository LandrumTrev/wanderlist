// used by React client Components to make API calls to the server

// use axios to make XMLHttpRequest API calls to Express server from React client
import axios from "axios";

// define axios call functions to be executed when calling "API.getBooks" etc
// NOTE: where is the PUT route to update a document?
export default {
  // Gets all books
  getBooks: function() {
    // in this app's domain, do a GET call on domain.com/api/books
    // server.js (Express) will use routes/api/index.js etc to route this call
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    // construct and make an API call with (id) from a API.getBook(id) call
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
