import { combineReducers } from 'redux';
import {
  books,
  booksIsLoading,
  booksPagination,
  booksSearchTerm
} from './Books';

export default combineReducers({
  books,
  booksIsLoading,
  booksPagination,
  booksSearchTerm
});
