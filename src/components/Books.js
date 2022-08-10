import { useState } from 'react';

import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const [books] = useState([{ id: 1, title: 'Elden Ring', author: 'Miyazaki' }, { id: 2, title: 'One Piece', author: 'Eichiro Oda' }]);

  return (
    <>
      {books.map((book) => <Book key={book.id} title={book.title} author={book.author} />)}
      <AddBook />
    </>
  );
};

export default Books;
