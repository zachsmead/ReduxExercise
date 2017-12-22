// in Redux, all of an app's data is stored in a single Javascript
// object that is managed by Redux, and is called the "application's state."
//
// A Reducer is a function that returns a piece of the application's state.
//
// because an application can have many different pieces of state, it can have
// many different Reducers.

// each piece of application state is designated by a key-value pair, where the
// value is provided by a Reducer.
// so below, for example, 'books' is the key name, and the value for 'books'
// is provided by calling BooksReducer, a reducer which returns an array
// of book titles.


import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book'

const rootReducer = combineReducers({
	books: BooksReducer,
	activeBook: ActiveBook
});

export default rootReducer;
