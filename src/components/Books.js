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
    const booksObj = await axios.get(api);
    if (booksObj.data) {
      Object.keys(booksObj.data).forEach((itemId) => {
        const data = booksObj.data[itemId];
        const book = Object.assign({}, { item_id: itemId }, ...data);
        if (books.find((book) => book.item_id === itemId)) {
          if (itemId !== books.find((book) => book.item_id === itemId).item_id) {
            books.push(book);
          }
        } else {
          books.push(book);
        }
      });
      return dispatch(loadBooks());
    }
    return console.log('No book in api');
  }, []);

  return (
    <>
      {books.map((book) => (<Book key={book.item_id} id={book.item_id} category={book.category} title={book.title} author={book.author} />))}
      <AddBook />
    </>
  );
};

export default Books;
