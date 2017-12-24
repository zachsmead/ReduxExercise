export function selectBook(book) {
	// selectBook is an ActionCreator. An ActionCreator is a function that returns
	// an Action.

	// An Action is just an object that has a type, which describes the type of
	// event that just got triggered. See below, the type of event is that a
	// book was just selected.

	// An action can also have some data attached to it.

	// When an action is generated, it automatically gets passed to every single
	// reducer that the app contains. If the action's type matches with a type
	// that a particular reducer cares about, or in other words, is listening for,
	// then some code will get executed and the reducer will return something.
	// This is usually done by using a switch statement that has different cases
	// for different action types.

	// A reducer doesn't have to care about every single action type. If a
	// reducer receives an action that it doesn't care about, then it will
	// just execute its default behavior, which is to just
	// return the current state.

	// See reducers/reducer_active_book.js. It is listening for the action type
	// 'BOOK_SELECTED'. So whenever the action below gets dispatched,
	// reducer_active_book's code will notice a match and will trigger.


	console.log('A book has been selected:', book.title);

	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}
