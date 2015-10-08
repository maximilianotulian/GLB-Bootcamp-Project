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
        rowsContent: React.PropTypes.array
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
        ;

        return <thead>{content}</thead>;
    },

    renderTableHeader: function (head, index) {
        return <th {...this.getTableHeaderProps(index)}>{head}</th>;
    },

    renderTableBody: function () {
        var rowsContent = this.props.rowsContent || [];
        var content = rowsContent.map(this.renderTableRow);

        if (content.length === 0) {
            content = this.renderLoading();
        };

        return <tbody>{content}</tbody>;
    },

    renderTableRow: function (row, index) {
        var rows = this.props.rows || [];
        var content = rows.map(this.renderTableCell.bind(this, row));

        return <tr key={index}>{content}</tr>;
    },

    renderTableCell: function (row, header, index) {
        var content = row[header] === true ? row[header].toString() : row[header];

        return <td key={index}> {content} </td>;
    },

    renderLoading: function () {
        return (
            <tr key="0">
                <td {...this.getLoadingProps()}>Loading...</td>
            </tr>
        );
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
            className: 'capitalize',
            key: index
        };
    },

    getLoadingProps: function () {
        var props = this.props;

        return {
            colSpan: props.rows.length,
            classNames: 'td-align-center'
        }
    },

    getClass: function () {
        var classes = {
            'table': true,
            'realm-view': true
        };

        return classNames(classes);
    }

});

module.exports = Table;