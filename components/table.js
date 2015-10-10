// LIBS
var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

// COMPONENTS
var Row = require('../components/row');
var $ = require('jquery');

var Table = React.createClass({

    propTypes: {
        rows: React.PropTypes.array,
        rowsContent: React.PropTypes.oneOfType ([
            React.PropTypes.array,
            React.PropTypes.object
        ])
    },

    render: function () {
        return (
            <table {...this.getTableProps()}>
                {this.renderTableHeaders()}
                {this.renderTableBody()}
            </table>
        );
    },

    renderTableHeaders: function () {
        var headers = this.props.rows || [];
        var content = headers.map(this.renderTableHeader);

        if (content.length === 0) {
            content = this.renderLoading();
        }

        return <thead>
        <tr className="custom-table--head">{content}</tr>
        </thead>;
    },

    renderTableHeader: function (head, index) {
        return <th {...this.getTableHeaderProps(index)}>{head}</th>;
    },

    renderTableBody: function () {
        var rowsContent = this.props.rowsContent || [];
        var content = rowsContent.map(this.renderTableRow);

        if (content.length === 0) {
            content = this.renderLoading();
        }

        return <tbody>{content}</tbody>;
    },

    renderTableRow: function (row, index) {
        var rows = this.props.rows || [];
        var content = rows.map(this.renderTableCell.bind(this, row));

        return <tr key={index} {...this.getTableRowProps(index)}>{content}</tr>;
    },

    renderTableCell: function (row, header, index) {
        var content = row[header] === true ? row[header].toString() : row[header];

        return <td key={index} className="custom-table--cell"> {content} </td>;
    },

    renderLoading: function () {
        return (
            <tr key="0">
                <td {...this.getLoadingProps()}>Loading...</td>
            </tr>
        );
    },

    getTableRowProps: function (index) {
        return {
            className: this.getTableRowClass(index)
        };
    },

    getTableRowClass: function (index) {

        var classes = {
            'custom-table--inverted-row': ((index % 2) === 0)
        };

        return classNames(classes);
    },

    getFilteredData: function () {

    },

    getTableProps: function () {
        return {
            className: this.getClass()
        };
    },

    getTableHeaderProps: function (index) {
        return {
            className: 'custom-table--cell',
            key: index
        };
    },

    getLoadingProps: function () {
        var props = this.props;
        var length;

        if (_.isUndefined(props.length)) {
            length = 1;
        } else {
            length = props.length;
        }

        return {
            colSpan: length,
            classNames: 'td-align-center'
        }
    },

    getClass: function () {
        var classes = {
            'custom-table': true
        };

        return classNames(classes);
    }

});

module.exports = Table;