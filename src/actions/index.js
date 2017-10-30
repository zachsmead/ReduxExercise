export function selectBook(book) {
	// selectBook is an ActionCreator; it needs to return an action, which is
	// just an object that contains a type property. See below.

	console.log('A book has been selected:', book.title);

	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}