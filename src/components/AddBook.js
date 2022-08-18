import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import { addBook } from '../redux/books/books';
import api from './api';

const AddBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  const postBook = async () => {
    const newBook = await axios.post(`${api}`, {
      item_id: uuidv4(),
      title,
      author,
      category,
    });
    dispatch(addBook(newBook));
    window.location.reload();
  };

  return (
    <div id="addBook">
      <h2>Add New Book</h2>
      <div className="container">
        <input type="text" placeholder="Add Title" value={title} onChange={changeTitle} />
        <input type="text" placeholder="Add Author" value={author} onChange={changeAuthor} />
        <input type="text" placeholder="Add Category" value={category} onChange={changeCategory} onKeyPress={(e) => e.key === 'Enter' && postBook()} />
        <button type="button" onClick={title !== '' && author !== '' && category !== '' ? postBook : () => console.log('form is empty')}>Add Book</button>
      </div>
    </div>
  );
};

export default AddBook;
