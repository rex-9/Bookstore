const ADD = 'ADD_BOOK';
const REMOVE = 'REMOVE_BOOK';

const booksXer = (state = [{ id: '1', title: 'Elden Ring', author: 'Miyazaki' }, { id: '2', title: 'One Piece', author: 'Eichiro Oda' }], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.book,
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.index);
    //   [
    //     ...state.slice(0, action.index),
    //     ...state.slice(action.index + 1),
    //   ];
      // state.filter((book) => book.id !== action.index);
    default:
      return state;
  }
};

const addBook = (book) => ({
  type: ADD,
  book,
});

const removeBook = (index) => ({
  type: REMOVE,
  index,
});

export default booksXer;
export { addBook, removeBook };
