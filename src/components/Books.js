/* eslint-disable max-len */

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Book from './Book';
import AddBook from './AddBook';
import { loadBooks } from '../redux/books/books';
import api from './api';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => async () => {
    const booksObj = await axios.get(`${api}/apps/wGWGzFIDteiCaiSsBeV3/books`);
    if (booksObj.data) {
      Object.keys(booksObj.data).forEach((itemId) => {
        const data = booksObj.data[itemId];
        const book = Object.assign({}, { item_id: itemId }, ...data);
        books.push(book);
      });
      return dispatch(loadBooks());
    }
    return console.log('No book in api');
  }, []);

  return (
    <>
      {books.map((book) => (<Book key={book.item_id} id={book.item_id} title={book.title} author={book.author} />))}
      <AddBook />
    </>
  );
};

export default Books;
