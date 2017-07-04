"use strict"; 

var React = require('react');

var About = React.createClass({
	statics: {
		willTransitionTo: function(transition, params, query, callback) {
			if (!confirm('Are you sure you want to read a page that\s this boring?')) {
				transition.about(); // abort, stay here... 
			} else {
				callback();
			}
		},
		willTransitionFrom: function(transition, component) {
			if (!confirm('Are you sure you want to leave a page that\s this exiting?')) {
				transition.about(); // abort, stay here... 
			}
		}
	},
	render: function() {
		return (
			<div>
				<h1>About</h1>
				<p>This is a learning project...</p>
				<ul>
					<li>React</li>
					<li>React Router</li>
					<li>Flux</li>
					<li>Node</li>
					<li>Gulp</li>
					<li>Browswerify</li>
					<li>Bootstrap</li>
				</ul>
			</div>
		);
	}
}); 

module.exports = About; 