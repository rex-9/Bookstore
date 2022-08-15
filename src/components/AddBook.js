import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import { addBook } from '../redux/books/books';
import store from '../redux/configureStore';

const AddBook = (props) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const clickAdd = () => {
    const { listenChanges } = props;
    if (title === '' || author === '') {
      console.log('form is empty');
    } else {
      store.dispatch(addBook({ id: uuidv4(), title, author }));
      setTitle('');
      setAuthor('');
      listenChanges();
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

AddBook.propTypes = {
  listenChanges: PropTypes.func.isRequired,
};

export default AddBook;
