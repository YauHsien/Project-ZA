"use strict"; 

var React = require('react');
var Router = require('react-router');
var Link = Router.Link; 
var gMap = require('google-map-react');

var Home = React.createClass({
    initMap: function() {
        var map = new gMap.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
    },

	render: function() {
		return (
			<div className="jumbotron">
				<h1>Welcome to Learning Home Page</h1>
				<p>React, React Router, Flux for ultra-responsive webapp.</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn more...</Link>
				<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCS40sFe_ZSVXlNyXzaAt5x56VoI7HiJy4&callback=initMap" async defer></script>
			</div>
		);
	}
}); 

module.exports = Home; 
