import React, { Component } from 'react';
import * as axios from 'axios';
import './BookList.css';
const url = 'http://localhost:3004/books';

export class BookList extends Component {
  constructor() {
    super();
    this.state = { listView: true, books: [] };
    axios.get(url).then(response => {
      this.setState({ books: response.data });
    });
  }
  listView = () => {
    this.setState({ listView: true });
  };
  getFirst100Words = words => {
    console.log(words);
    let wordTokens = words.split(' ');
    if (wordTokens.length > 30) {
      return wordTokens.slice(0, 30).join(' ') + '...';
    }
    return words;
  };
  gridView = () => {
    this.setState({ listView: false });
  };
  render() {
    console.log(this.state.books);
    let renderedBookList = this.state.books.map((book, id) => {
      return (
        <div
          className={`item col-xs-4 col-lg-4 ${
            this.state.listView ? 'list-group-item' : 'grid-group-item'
          }`}
          key={id}
        >
          <div className="thumbnail card">
            <div className="img-event">
              <img
                className="group list-group-image img-fluid"
                src={book.image_url}
                alt=""
              />
            </div>
            <div className="caption card-body title">
              <h4 className="group card-title inner list-group-item-heading">
                {book.title}
              </h4>
              <p className="group inner list-group-item-text">
                Author:
                <span>
                  {book.authors.join(', ')}
                </span>
              </p>
            </div>
            <div className="caption card-body title">
              <p className="group inner list-group-item-text">
                {this.getFirst100Words(book.description)}
              </p>
            </div>
            <div>
              <div className="caption card-body">
                <div className="col-xs-12 col-md-6">
                  <a className="btn btn-success" href="/">
                    Get Info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <hr />
        <hr />
        <div className="container">
          <div className="row">
            <h2>Our current bookstore</h2>
          </div>
          <div className="row">
            <div className="col-lg-12 my-3">
              <div className="pull-right">
                <div className="btn-group">
                  <button
                    className="btn btn-info"
                    id="list"
                    onClick={this.listView}
                  >
                    List View
                  </button>
                  <button
                    className="btn btn-danger"
                    id="grid"
                    onClick={this.gridView}
                  >
                    Grid View
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="products" className="row view-group">
            {renderedBookList}
          </div>
        </div>
      </div>
    );
  }
}
