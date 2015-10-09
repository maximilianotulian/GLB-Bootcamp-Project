//LIBS
var React = require('react');
var _ = require('lodash');
var classNames = require('classnames');

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
            onClick: this.handleClick,
            className: this.getClass()
        }
    },

    getClass: function () {
        var classes = {
            'custom-button': true
        };

        return classNames(classes);
    },

    handleClick: function () {
        var props = this.props;

        if (!_.isUndefined(props.onClick)) {
            props.onClick();
        };
    }
});

module.exports = Button;