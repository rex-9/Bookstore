import { PropTypes } from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div id="bookCard">
      <p id="title">{title}</p>
      <p id="author">{author}</p>
      <button type="button">Remove</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
