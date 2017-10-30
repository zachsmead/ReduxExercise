import React, { Component } from 'react';

import { connect } from 'react-redux';

export class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className='list-group-item'>{book.title}</li>
			)
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}


function mapStateToProps(state) {
	// Whatever is returned here will show up as props inside of BookList

	// ALSO IMPORTANT: if the state ever changes, this container will instantly re-render with a new list of books.
	return {
		books: state.books
	};
}

export default connect(mapStateToProps)(BookList);