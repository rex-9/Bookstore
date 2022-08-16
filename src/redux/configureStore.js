import { createStore, combineReducers } from 'redux';

import booksXer from './books/books';
import cateXer from './categories/categories';

const rootXer = combineReducers({
  books: booksXer,
  categories: cateXer,
});

const store = createStore(rootXer);

export default store;
