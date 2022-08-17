import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import api from './api';

import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();

  const {
    id, category, title, author,
  } = props;

  const clickRemove = async () => {
    await axios.delete(`${api}${id}`);
    dispatch(removeBook(id));
  };

  return (
    <div id="bookCard">
      <div id="category">{category}</div>
      <div id="title">{title}</div>
      <div id="author">{author}</div>
      <button id="comments" type="button">Comments</button>
      <button id="remove" type="button" onClick={clickRemove}>Remove</button>
      <button id="edit" type="button">Edit</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
