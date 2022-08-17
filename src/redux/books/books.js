const LOAD_BOOKS = 'bookstore/books/LOAD_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initState = [{
  item_id: '1', title: 'Elden Ring', author: 'Miyazaki', category: 'Souls',
}, {
  item_id: '2', title: 'One Piece', author: 'Eichiro Oda', category: 'Adventure',
}];

const booksXer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return [
        ...state,
      ];
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

const loadBooks = () => ({
  type: LOAD_BOOKS,
});

const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = (index) => ({
  type: REMOVE_BOOK,
  payload: index,
});

export default booksXer;
export { loadBooks, addBook, removeBook };
