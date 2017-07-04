"use strict"; 

var React = require('react');
var Router = require('react-router');
var Link = Router.Link; 

var _404 = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Oh, come on... </h1>
				<p>Page Not Found.</p>
				<Link to="app" className="btn btn-primary btn-lg">Back to home...</Link>
			</div>
		);
	}
}); 

module.exports = _404; 