/*eslint-disable strict */
$ = jQuery = require('jquery'); // requiring jquery globally; make bootstrap happy

var React = require('react'); 
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;

// instead of using React Router... a simple router
var App = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				<div className="container-fluid">
					<RouteHandler/>
				</div>
			</div>
		); 
	}
});

module.exports = App;