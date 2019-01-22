// Detail page view component
// called in Book page view and routed by React Router in App.js
// <Link to={"/books/" + book._id}>
// route call always includes the MongoDB book _id

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  // state holds all details for a single book as an object
  state = {
    book: {}
  };

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    // this.props.match.params.id gets book._id from localhost:3000/books/1234567
    // have axios make a GET API call to Express server to query database
    API.getBook(this.props.match.params.id)
    // then set this.state.book object as the returned res.data from the API call
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      // Bootstrap container, row, col, jumbotron React components, HTML <article>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.book.title} by {this.state.book.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.book.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
