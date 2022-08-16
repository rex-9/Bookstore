/* eslint-disable max-len */

import { useState } from 'react';

import Book from './Book';
import AddBook from './AddBook';
import store from '../redux/configureStore';

const Books = () => {
  const booksState = store.getState().books;
  const [books, setBooks] = useState(booksState);

  const listenChanges = () => {
    setBooks(store.getState().books);
  };

  return (
    <>
      {books.map((book) => <Book key={book.id} id={book.id} title={book.title} author={book.author} listenChanges={listenChanges} />)}
      <AddBook listenChanges={listenChanges} />
    </>
  );
};

export default Books;
