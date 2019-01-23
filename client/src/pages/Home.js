// Home page view Component called by React Router in the App.js Router Switch Routes

import React, { Component } from "react";
// use a <Link> tag in place of <a href> to link to another page view with React Router
// import { Link } from "react-router-dom";

// import API in order to make axios API calls to the Express Server
// import API from "../utils/API";

// import single-component .js files
import Header from "../components/Header";
import Background from "../components/Background";

// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";

// import multiple-component .js files
import { Col, Row, Container } from "../components/Grid";
import { CardsContainer, ResultCard, NoResultCard } from "../components/Cards";

// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

// import master style.css for all page views
import "./style.css";

class Home extends Component {
  // variable data held and managed by Home component
  state = {
    // books: [],
    // title: "",
    // author: "",
    // synopsis: ""
  };

  // ===================================================

  // whenever this page-view Component mounts (is called and displayed),
  // run the loadBooks() method (below)
  componentDidMount() {
    // this.loadBooks();
  }

  // ===================================================

  // call client/src/utils/API.js to make API.getBooks() axios API route call
  // loads all books data in the db into this.state.books
  // and also clear all existing data in this.state.title, .author, and .synopsis

  loadBooks = () => {
    //   API.getBooks()
    //     .then(res => this.setState({ books: res.data, title: "", author: "", synopsis: "" }))
    //     .catch(err => console.log(err));
  };

  // ===================================================

  // when this.deleteBook(id) is called,
  // call client/src/utils/API.js to make API.deleteBook(id) axios API route call
  // and then call this.loadBooks() above to refresh all book data in state

  deleteBook = id => {
    //   API.deleteBook(id)
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
  };

  // ===================================================

  // send live typed input data to this.state.title, .author, .synopsis on each keystroke
  handleInputChange = event => {
    // create variables name and value for event.target.name and event.target.value
    // const { name, value } = event.target;
    // use setState to change state values of the state key [name] for whichever property
    // this.setState({
    // [name]: value
    // });
  };

  // ===================================================

  // when user hits the submit button to add a new book,
  handleFormSubmit = event => {
    // prevent page reload default behavior of "submit"
    // event.preventDefault();
    // as long as user entered a title and author (synopsis optional)
    // if (this.state.title && this.state.author) {
    // call client/src/utils/API.js to make API.saveBook(bookData) axios API call
    // and send current this.state.title, .author, and .synopsis values
    // as the req.body (bookData) of the axios API POST call to /api/books
    // API.saveBook({
    // title: this.state.title,
    // author: this.state.author,
    // synopsis: this.state.synopsis
    // })
    // after async operation complete, call loadBooks() to get updated book list
    // .then(res => this.loadBooks())
    // .catch(err => console.log(err));
    // }
  };

  // ===================================================

  render() {
    return (
      <>
        {/* <Container fluid > */}
        <Background>
          {/* logo and intro text header */}
          <Header>
            <Row>
              <Col size="sm-6 md-4">
                <img src="assets/images/dinofii_logo.svg" style={{ width: "90%", maxHeight: 150, padding: "1px 1px 1px 1px" }} alt="Dinofii logo" />
              </Col>
              <Col size="sm-6 md-8">
                <div style={{ fontWeight: "100", color: "#444", textAlign: "left", padding: "0px 30px 30px 0px" }}>
                  <span style={{ fontWeight: "700", color: "rgb(121, 27, 27)" }}>FIND NEW PLACES TO EXPLORE.</span> Select a feature and choose an
                  area to search. Dinofii gives you a random point of interest and the closest city, as well as links to info, maps, directions, and
                  local wifi.
                </div>
              </Col>
            </Row>
          </Header>

          {/* Search Options Pulldown Selects */}
          <Container>
            {/* <Container fluid> */}
            <form action="">
              <div className="row">
                <div id="local_col" className="col-sm-6 p-2">
                  <div id="feature_input" className="input-group">
                    <select name="feature" className="custom-select" id="country_options" />
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon2" style={{ width: "5rem" }}>
                        country
                      </span>
                    </div>
                  </div>
                </div>
                <div id="feature_col" className="col-sm-6 p-2">
                  <div id="feature_input" className="input-group">
                    <select name="feature" className="custom-select" id="feature_options" />
                    <div className="input-group-append">
                      <input id="search_btn" type="submit" className="btn btn-secondary" name="submit" value="search" style={{ width: "5rem" }} />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {/* </Container> */}
          </Container>

          {/* Clear All Results button and search results label */}
          <Container>
            <div id="results_header" className="row pr-2 pl-2">
              <div className="input-group input-group-sm mb-3">
                <button className="form-control btn-outline-light text-left" style={{ height: "30px" }} disabled>
                  SEARCH RESULTS:
                </button>
                <div className="input-group-prepend">
                  <button className="form-control btn btn-outline-light" type="button" id="clear_button" style={{ width: "5rem", height: "30px" }}>
                    CLEAR
                  </button>
                </div>
              </div>
            </div>
          </Container>

          {/* ResultCards list */}
          <CardsContainer fluid>
            <ResultCard />
          </CardsContainer>

          {/* Row returns a Bootstrap "row" */}
          {/* <Row> */}
          {/* Col returns a Bootstrap "col-md-6" */}
          {/* <Col size="md-6"> */}
          {/* returns a Bootstrap "jumbotron" with inline CSS */}
          {/* <Jumbotron> */}
          {/* <h1>What Books Should I Read?</h1> */}
          {/* </Jumbotron> */}
          {/* HTML <form> tag: input for adding a new book */}
          {/* <form> */}
          {/* Bootstrap "form-group" <div> and "form-control" <input> with ...props */}
          {/* <Input  */}
          {/* // insert this.state.title data as the value of the input field */}
          {/* value={this.state.title}  */}
          {/* // on every char typed, make field value the value of this.state.title */}
          {/* onChange={this.handleInputChange}  */}
          {/* // name used by this.handleInputChange to change this.state.title */}
          {/* name="title"  */}
          {/* // displayed field text when no value exists */}
          {/* placeholder="Title (required)"  */}
          {/* /> */}
          {/* <Input  */}
          {/* value={this.state.author}  */}
          {/* onChange={this.handleInputChange}  */}
          {/* name="author"  */}
          {/* placeholder="Author (required)"  */}
          {/* /> */}
          {/* uses <textarea> instead of <input>, sizes input field to 20 rows deep */}
          {/* <TextArea  */}
          {/* value={this.state.synopsis}  */}
          {/* onChange={this.handleInputChange}  */}
          {/* name="synopsis"  */}
          {/* placeholder="Synopsis (Optional)"  */}
          {/* /> */}
          {/* <button> with Bootstrap classes, inline CSS, props, and children */}
          {/* <FormBtn  */}
          {/* // button is disabled if no author AND title are entered */}
          {/* disabled={!(this.state.author && this.state.title)}  */}
          {/* // when button is clicked, handle the click with this.handleFormSubmit */}
          {/* onClick={this.handleFormSubmit} */}
          {/* > */}
          {/* Submit Book */}
          {/* </FormBtn> */}
          {/* </form> */}
          {/* </Col> */}
          {/* <Col size="md-6 sm-12"> */}
          {/* <Jumbotron> */}
          {/* <h1>Books On My List</h1> */}
          {/* </Jumbotron> */}
          {/* if there are books in this.state.books (if TRUE (exists)), then */}
          {/* {this.state.books.length ? ( */}
          {/* // create a List component container (styled <div> holding "list-group" <ul>) */}
          {/* <List> */}
          {/* array.map() all books in this.state.books */}
          {/* {this.state.books.map(book => ( */}
          {/* // where every book object gets a ListItem component with a key for React */}
          {/* // an <li> with Bootstrap "list-group-item" */}
          {/* <ListItem key={book._id}> */}
          {/* <li> contains a Link (React Router) to it's own book page */}
          {/* App.js (React Router) sends this route to Detail.js page view */}
          {/* <Link to={"/books/" + book._id}> */}
          {/* <strong> */}
          {/* Link surrounds the displayed title and author */}
          {/* {book.title} by {book.author} */}
          {/* </strong> */}
          {/* </Link> */}
          {/* ListItem also contains DeleteBtn with click handler */}
          {/* returns a <button> with other non-individual properties */}
          {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
          {/* </ListItem> */}
          {/* ))} */}
          {/* </List> */}
          {/* ) : ( */}
          {/* // otherwise, if this.state.books does not have a length (no data), then */}
          {/* // don't create the <List> component, just create this <h3>: */}
          {/* <h3>No Results to Display</h3> */}
          {/* )} */}
          {/* </Col> */}
          {/* </Row> */}
          {/* </Container> */}
        </Background>
      </>
    );
  }
}

export default Home;
