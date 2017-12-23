// in Redux, all of an app's data is stored in a single Javascript
// object that is managed by Redux, and is called the "application's state."

// A Reducer is a function that returns a piece of the application's state.

// because an application can have many different pieces of state, it can have
// many different Reducers.

// each piece of application state is designated by a key-value pair, where the
// value is provided by a Reducer.

// so below, for example, 'books' is the key name, and the value for 'books'
// is provided by calling BooksReducer, a reducer which returns an array
// of book titles.


import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'; // we name the reducer here in this
																						// line and not in the actual file,
																						// which is unlike other components
																						// where when you name/export the
																						// component by its name (e.g.
																						// class BookDetail, export default
																						// BookDetail in containers/book-detail.js).
																						// I think this is because in a reducer
																						// file, there is only 1 function
																						// defined/exported for each reducer
																						// so we don't need a name that would
																						// otherwise distinguish the function
																						// from other functions that could be
																						// exported from the file.
import ActiveBook from './reducer_active_book'


// this function combines all the other reducers, or pieces of state,
// into a single function, a single composite of all pieces of state.
// and we can export this to be used in other parts of the app.
const rootReducer = combineReducers({
	books: BooksReducer,
	activeBook: ActiveBook
});

export default rootReducer;
