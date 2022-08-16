import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();

  const {
    id, title, author,
  } = props;

  const clickRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <div id="bookCard">
      <p id="title">{title}</p>
      <p id="author">{author}</p>
      <button type="button" onClick={clickRemove}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
