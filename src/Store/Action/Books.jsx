import * as axios from 'axios';
const url = 'http://localhost:3004/books';
export function booksIsLoading(isLoading) {
  return {
    type: 'BOOKS_IS_LOADING',
    isLoading
  };
}
export function booksFetchedSuccess(books) {
  return {
    type: 'BOOKS_FETCHED_SUCCESS',
    books
  };
}
export function booksTotalChanged(total) {
  return {
    type: 'BOOKS_TOTAL_CHANGE',
    total
  };
}
export function booksPageChanged(page) {
  return {
    type: 'BOOKS_PAGE_CHANGE',
    page
  };
}
export function booksSearchTermChange(searchTerm) {
  return {
    type: 'BOOKS_SEARCH_TERM_CHANGE',
    searchTerm
  };
}
export function booksListView(listView) {
  return {
    type: 'LIST_VIEW_CHANGE',
    listView
  };
}
export function updateListView(listView) {
  return dispatch => {
    dispatch(booksListView(listView));
  };
}
export function updatePageAndFetchBooks(page) {
  return dispatch => {
    dispatch(booksPageChanged(page));
    dispatch(fetchBooks());
  };
}
export function updateSearchTermAndFetchBooks(searchTerm) {
  return dispatch => {
    dispatch(booksSearchTermChange(searchTerm));
    dispatch(fetchBooks());
  };
}
export function fetchBooks() {
  return (dispatch, getState) => {
    const { books, booksPagination, booksSearchTerm } = getState();
    //only run loading if no book in the list to prevent page refreshed
    if ((!books || !books.length) && booksSearchTerm === null) {
      dispatch(booksIsLoading(true));
    }
    let params = `?_page=${booksPagination.page}&_limit=${
      booksPagination.count
    }`;
    if (booksSearchTerm) {
      params += `&title_like=${booksSearchTerm}`;
    }
    axios
      .get(url + params)
      .then(response => {
        dispatch(booksIsLoading(false));
        return response;
      })
      .then(response => {
        dispatch(booksFetchedSuccess(response.data));
        dispatch(booksTotalChanged(+response.headers['x-total-count']));
      });
  };
}
