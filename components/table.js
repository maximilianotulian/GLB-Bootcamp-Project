// LIBS
var React = require('react');
var classNames = require('classnames');

// COMPONENTS
var Row = require('../components/row');

var Table = React.createClass({

    render: function () {
        return (
            <table {...this.getProps()}>
                {this.renderHead()}
                {this.renderBody()}
            </table>
        );
    },

    renderHead: function () {
        return (
            <thead>
            <tr>
                <th>Status</th>
                <th>Name</th>
                <th>Type</th>
                <th>Population</th>
            </tr>
            </thead>
        );
    },

    renderBody: function () {

    },

    renderRealm: function () {

    },

    getFilteredData: function () {

    },

    getProps: function () {
        return {
            className: this.getClass()
        }
    },

    getClass: function () {
        var classes = {
            'table': true
        };

        return classNames(classes);
    }
});

module.exports = Table;