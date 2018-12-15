import React, { Component } from 'react';
import * as axios from 'axios';
import ReactPaginate from 'react-paginate';
import './BookList.css';
const url = 'http://localhost:3004/books';

export class BookList extends Component {
  constructor() {
    super();
    this.state = {
      listView: true,
      books: [],
      pagination: { count: 10, page: 1, total: null }
    };
    this.loadBooks(this.state.pagination.count, this.state.pagination.page);
  }
  loadBooks(count, page) {
    count = count ? count : 10;
    page = page ? page : 1;
    let params = `?_page=${page}&_limit=${count}`;
    axios.get(url + params).then(response => {
      this.setState({
        books: response.data,
        pagination: {
          count: count,
          page: page,
          total: +response.headers['x-total-count']
        }
      });
    });
  }
  listView = () => {
    this.setState({ listView: true });
  };
  getFirst100Words = words => {
    let wordTokens = words.split(' ');
    if (wordTokens.length > 50) {
      return wordTokens.slice(0, 50).join(' ') + '...';
    }
    return words;
  };
  gridView = () => {
    this.setState({ listView: false });
  };
  handlePageClick = data => {
    this.loadBooks(this.state.pagination.count, data.selected + 1);
  };

  render() {
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
                <span>{book.authors.join(', ')}</span>
              </p>
            </div>
            <div className="caption card-body body">
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
          <ReactPaginate
            containerClassName="pagination pagination-lg"
            breakClassName="page-item"
            breakLabel={<a className="page-link">...</a>}
            pageClassName="page-item"
            activeClassName="active"
            activeLinkClassName="disabled"
            previousClassName="page-item"
            nextClassName="page-item"
            pageLinkClassName="page-link"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            pageCount={
              this.state.pagination.total / this.state.pagination.count
            }
            initialPage={this.state.pagination.page - 1}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            onPageChange={this.handlePageClick}
          />
          <div id="products" className="row view-group">
            {renderedBookList}
          </div>
        </div>
      </div>
    );
  }
}
