import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addBook } from '../redux/books/books';

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

  const clickAdd = () => {
    if (title !== '' && author !== '') {
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
        <input type="text" placeholder="Add Author" value={author} onChange={changeAuthor} onKeyPress={(e) => e.key === 'Enter' && clickAdd()} />
        <button type="button" onClick={clickAdd}>Add Book</button>
      </div>
    </div>
  );
};

export default AddBook;
