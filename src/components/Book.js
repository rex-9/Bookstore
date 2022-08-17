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
    <div className="bookCard">
      <div>
        <div className="category">{category}</div>
        <div className="title">{title}</div>
        <div className="author">{author}</div>
        <button className="comments" type="button">Comments</button>
        <button className="remove" type="button" onClick={clickRemove}>Remove</button>
        <button className="edit" type="button">Edit</button>
      </div>
      <div className="progress">
        <div><div className="circle" /></div>
        <div>Chapter</div>
      </div>
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
