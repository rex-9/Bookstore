// import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../redux/books/books';
// import api from './api';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const postBook = () => {
    if (title !== '' && author !== '') {
      // return async (dispatch) => {
      //   const books = await axios.post(`${api}/apps/wGWGzFIDteiCaiSsBeV3/books`);
      //   return dispatch(addBook({ id: uuidv4(), title, author }));
      // };
      dispatch(addBook({ id: uuidv4(), title, author }));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div id="addBook">
      <h2>Add Book</h2>
      <div className="container">
        <input type="text" placeholder="Add Title" value={title} onChange={changeTitle} />
        <input type="text" placeholder="Add Author" value={author} onChange={changeAuthor} onKeyPress={(e) => e.key === 'Enter' && postBook()} />
        <button type="button" onClick={postBook}>Add Book</button>
      </div>
    </div>
  );
};

export default AddBook;
