// LIBS
var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

// COMPONENTS
var Row = require('../components/row');
var $ = require('jquery');

var Table = React.createClass({

    propTypes: {
        headers: React.PropTypes.array,
        realms: React.PropTypes.shape({
            name: React.PropTypes.string,
            status: React.PropTypes.bool,
            type: React.PropTypes.string,
            population: React.PropTypes.string
        })
    },

    render: function () {
        return this.renderTable();
    },

    renderTHead: function () {
        var headers = this.props.headers;
        var ths = [];

        if (!_.isUndefined(headers)) {
            _.each(headers, function (value, index) {
                ths.push(<th className="capitalize" key={index}> {value} </th>);
            });
        }
        return (
            <thead>
            {ths}
            </thead>
        );
    },

    renderTBody: function () {
        var rows = [];
        var realms = this.props.realms;

        if (!_.isUndefined(realms) && realms.length > 0) {
            var indexRealm = 0;

            for (indexRealm; indexRealm < realms.length; indexRealm += 1) {
                rows.push(
                    <tr key={realms[indexRealm].name}>
                        <td>{realms[indexRealm].name}</td>
                        <td>{realms[indexRealm].status.toString()}</td>
                        <td>{realms[indexRealm].type}</td>
                        <td>{realms[indexRealm].population}</td>
                    </tr>
                );
            }
        } else {
            rows.push(<tr><td>loading...</td></tr>);
        }

        return (
            <tbody>
            { rows }
            </tbody>
        )
    },

    renderTable: function () {
        return (
            <table {...this.getProps()}>
                {this.renderTHead()}
                {this.renderTBody()}
            </table>
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