//LIBS
var React = require('react');
var _ = require('lodash');

var Button = React.createClass({
    render: function () {
        return (
            <button>{this.props.children}</button>
        )
    }
});

module.exports = Button;