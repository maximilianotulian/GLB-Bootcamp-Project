var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

var StatGroup = React.createClass({

    render: function () {
        return (
            null
        )
    },

    getProps: function () {
        return {
            className: this.getClass()
        }
    },

    getClass: function () {
        var classes = {
            'stat-group': true,
            'col-md-4': true
        };

        return classNames(classes);
    }
});

module.exports = StatGroup;
