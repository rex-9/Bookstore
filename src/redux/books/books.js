const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initState = [{ id: '1', title: 'Elden Ring', author: 'Miyazaki' }, { id: '2', title: 'One Piece', author: 'Eichiro Oda' }];

const booksXer = (state = initState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.index);
    default:
      return state;
  }
};

const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

const removeBook = (index) => ({
  type: REMOVE_BOOK,
  index,
});

export default booksXer;
export { addBook, removeBook };
