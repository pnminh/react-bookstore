import { combineReducers } from 'redux';
import {
  books,
  booksIsLoading,
  booksPagination,
  booksSearchTerm,
  booksListView
} from './Books';

export default combineReducers({
  books,
  booksIsLoading,
  booksPagination,
  booksSearchTerm,
  booksListView
});
