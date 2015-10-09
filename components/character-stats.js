// LIBS
var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

// COMPONENTS
var StatGroup = require('./stat-group');

var CharacterStats = React.createClass({

    render: function () {
        return (
            <div {...this.getProps()}>
                <StatGroup {...this.getStatProps()}/>
                <StatGroup {...this.getStatProps()}/>
                <StatGroup {...this.getStatProps()}/>
            </div>
        )
    },

    getProps: function () {
        return {
            className: this.getClass()
        }
    },

    getClass: function () {
        var classes = {
            'row': true
        };

        return classNames(classes);
    },

    getStatProps: function () {
        return {
            className: this.getStatClass()
        }
    },

    getStatClass: function () {
        var classes = {
            'col-md-4': true
        };

        return classNames(classes);
    }
});

module.exports = CharacterStats;