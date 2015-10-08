//LIBS
var React = require('react');
var _ = require('lodash');

var Button = React.createClass({

    propTypes: {
        onClick: React.PropTypes.func
    },

    render: function () {
        return (
            <button {...this.getProps()}>{this.props.children}</button>
        )
    },

    getProps: function () {
        return {
            onClick: this.handleClick
        }
    },

    handleClick: function () {
        var props = this.props;

        if (!_.isUndefined(props.onClick)) {
            props.onClick();
        };
    }
});

module.exports = Button;