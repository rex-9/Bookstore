import { PropTypes } from 'prop-types';
import { removeBook } from '../redux/books/books';
import store from '../redux/configureStore';

const Book = (props) => {
  const {
    id, title, author, listenChanges,
  } = props;

  const clickRemove = () => {
    store.dispatch(removeBook(id));
    listenChanges();
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
  listenChanges: PropTypes.func.isRequired,
};

export default Book;
