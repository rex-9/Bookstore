import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import booksXer from './books/books';
import cateXer from './categories/categories';

const rootXer = combineReducers({
  books: booksXer,
  categories: cateXer,
});

const store = createStore(rootXer, applyMiddleware(thunk));

export default store;
