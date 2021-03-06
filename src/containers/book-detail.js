// this file doesn't have a mapDispatchToProps function, because we are only
// drawing from application state, not updating it with any actions.

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		if (!this.props.book) {
			return(
				<div>Select a book to get started.</div>
			)
		}


		return(
			<div>
				<h3>Details for:</h3>
				<div>Title: {this.props.book.title}</div>
				<div>Pages: {this.props.book.pages}</div>
			</div>
		);
	}
}


// in this container's props, get the property activeBook from the application
// state (rootReducer) in reducers/index.js and set that as the value for
// props.book.
function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}


export default connect(mapStateToProps)(BookDetail);
