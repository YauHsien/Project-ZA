var React = require('react');
var shouldPureComponentUpdate = require('react-pure-render');
var GreatPlaceStyle = require('./my_great_place_styles');

var MyGreatPlace = React.createClass({
  propTypes: {
    text: React.PropTypes.string
  },

  defaultProps: {},

  render: function() {
    return (
       <div>
          {this.props.text}
       </div>
    );
  }
});

module.exports = MyGreatPlace;