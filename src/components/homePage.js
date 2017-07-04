"use strict"; 

var React = require('react');
var Router = require('react-router');
var Link = Router.Link; 
// var Editor = require('./editor');


var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>Welcome to Learning Home Page</h1>
				<p>React, React Router, Flux for ultra-responsive webapp.</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn more...</Link>
			</div>
		);
	}
}); 

module.exports = Home; 