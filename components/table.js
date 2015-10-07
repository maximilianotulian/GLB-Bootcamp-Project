// LIBS
var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

// COMPONENTS
var Row = require('../components/row');

var Table = React.createClass({

    render: function () {
        return (
            <table {...this.getProps()}>
                {this.renderTHead()}
                {this.renderTBody()}
            </table>
        );
    },

    renderTHead: function () {
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Type</th>
                    <th>Population</th>
                </tr>
            </thead>
        );
    },

    renderTBody: function () {
        var rows = [];
        var realms = this.props.realms;

        if (!_.isUndefined(realms)) {
            var indexRealm = 0;

            for (indexRealm; indexRealm < realms.length; indexRealm += 1 ) {
                rows.push(
                    <tr key={realms[indexRealm].name}>
                        <td>{realms[indexRealm].name}</td>
                        <td>{realms[indexRealm].status.toString()}</td>
                        <td>{realms[indexRealm].type}</td>
                        <td>{realms[indexRealm].population}</td>
                    </tr>
                );
            };
        }

        return (
            <tbody>
                {rows}
            </tbody>
        )
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