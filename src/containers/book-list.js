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

// in the function mapStateToProps, we're telling React to grab the data
// in reducers/index.js - that's the location of the data managed by Redux.

// and we tell React which pieces of state we want to use in this component,
// and React stores those pieces of state inside the component's props.

// Whatever is returned by this function will show up as props inside of BookList.
// ALSO IMPORTANT: if the state ever changes, this container will instantly
// re-render with a new list of books.
function mapStateToProps(state) {
	return {
		books: state.books // 'books:' becomes a key in props.
											 // 'state.books' gives us the list of books defined in
											 // reducers/reducer_books.js, and this list becomes the
											 // value for the key 'books:' that we just defined in
											 // props.
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
