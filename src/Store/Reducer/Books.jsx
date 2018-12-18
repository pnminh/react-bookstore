export function booksIsLoading(state = false, action) {
  switch (action.type) {
    case 'BOOKS_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}
export function books(state = [], action) {
  switch (action.type) {
    case 'BOOKS_FETCHED_SUCCESS':
      return action.books;
    default:
      return state;
  }
}
export function booksPagination(
  state = { count: 10, page: 1, total: null },
  action
) {
  switch (action.type) {
    case 'BOOKS_TOTAL_CHANGE':
      return { ...state, total: action.total };
    case 'BOOKS_PAGE_CHANGE':
      return { ...state, page: action.page };
    default:
      return state;
  }
}
export function booksSearchTerm(state = '', action) {
  switch (action.type) {
    case 'BOOKS_SEARCH_TERM_CHANGE':
      return action.searchTerm;
    default:
      return state;
  }
}
export function booksListView(state = false, action) {
  switch (action.type) {
    case 'LIST_VIEW_CHANGE':
      return action.listView;
    default:
      return state;
  }
}
