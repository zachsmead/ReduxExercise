// what is a container, as opposed to a component?
// a container is a React component that is directly connected
// to the application's state that is managed by Redux.
// also known as "smart" components as opposed to "dumb" components.


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


export class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li
					key={book.title}
					onClick={() => this.props.selectBook(book)}
					className='list-group-item'>
					{book.title}
				</li>
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
	//^ 'books' becomes a key in props
	//			 ^ state.books becomes the value for the key 'books ''
	};
}

// Anything returned from this function will end up as props on the BookList container
// See below: 'selectBook' becomes a key in props, 'selectBook' is the value.
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed to all of our reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}


// Promotes BookList from a component to a container - it needs to know about this new dispatch method,
// selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
