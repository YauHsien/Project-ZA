"use strict";

// controller view of Authors 

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link; 

var AuthorApi = require('../../api/authorApi'); 
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({
	getInitialState: function() {
		return {
			authors: []
		};
	},

	componentDidMount: function() {
		if (this.isMounted()) {
			this.setState({ authors: AuthorApi.getAllAuthors() });			
		}
	},

	render: function() {
		return (
			// should always have a top level component in react
			<div>
				<h1>Authors</h1>
				<Link to="addAuthor" className="btn btn-default">Add Author</Link>
				<AuthorList authors={this.state.authors} />
			</div>
		);
	}
});

module.exports = AuthorPage; 