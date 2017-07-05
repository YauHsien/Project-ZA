/*
 * Base Google Map example
 */
var React = require('react');
var shouldPureComponentUpdate = require('react-pure-render');
var GoogleMap = require('google-map-react');
var MyGreatPlace = require('./my_great_place');

var SimpleMap = React.createClass({

  propTypes: {
      center: React.PropTypes.array,
      zoom: React.PropTypes.number,
      greatPlaceCoords: React.PropTypes.any
  },

  defaultProps: {
      center: [59.938043, 30.337157],
      zoom: 9,
      greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  },
/*
  constructor(props) {
    super(props);
  },
*/
  render: function() {
    return (
       <GoogleMap
        apiKey={"AIzaSyBnNWymwIRWG8CJppzrj3CK7dpLjVnYypg"} 
        center={this.props.center}
        zoom={this.props.zoom}>
        <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
        <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
      </GoogleMap>
    );
  }
});

module.exports = SimpleMap;  