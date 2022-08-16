/* eslint-disable max-len */

import { useSelector } from 'react-redux';

import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      {books.map((book) => <Book key={book.id} id={book.id} title={book.title} author={book.author} />)}
      <AddBook />
    </>
  );
};

export default Books;
