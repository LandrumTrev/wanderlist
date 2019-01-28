import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data, title: "", author: "", synopsis: "" }))
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input value={this.state.title} onChange={this.handleInputChange} name="title" placeholder="Title (required)" />
              <Input value={this.state.author} onChange={this.handleInputChange} name="author" placeholder="Author (required)" />
              <TextArea value={this.state.synopsis} onChange={this.handleInputChange} name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn disabled={!(this.state.author && this.state.title)} onClick={this.handleFormSubmit}>
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>

            {/* if any elements exist in this.state.books array, then render a <List> */}
            {/* <List> is just a Bootstrap <div> and <ul> list container */}
            {this.state.books.length ? (
              <List>
                {/* .map the books array, with each element referred to as "book" */}
                {this.state.books.map(book => (
                  // create a <ListItem> for each "book" and set a unique key for it
                  // <ListItem> is just a Bootstrap <li> list item
                  <ListItem key={book._id}>
                    {/* React Router <Link> replaces <a href>, links to "book"s page by _id */}
                    <Link to={"/books/" + book._id}>
                      {/* actual content of <ListItem>, wrapped in a <Link> */}
                      <strong>
                        {/* display properties of each "book" of mapped array */}
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    {/* a delete button handler with unique id of each book */}
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              // but if there are no items in this.state.books array, display this message
              <h3>No Results to Display</h3>
            )}
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
