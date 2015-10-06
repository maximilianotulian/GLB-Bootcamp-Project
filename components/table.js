// LIBS
var React = require('react');
var classNames = require('classnames');

// COMPONENTS
var Row = require('row');

var Table = React.createClass({

    propTypes: {
        filter: React.PropTypes.shape({
            filterText: React.PropTypes.string
        }),
        realms: React.PropTypes.array
    },

    render: function () {
        return (
            <table {...this.getProps()}>
                {this.renderHead()}
                {this.renderBody()}
            </table>
        );
    },

    renderHead: function () {
       /* <thead>
        <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Delete</th>
            <th>Edit</th>
        </tr>
        </thead>  */
    },

    renderBody: function () {
        /*
         <tbody>
            {this.getFilteredRealms().map(this.renderRealm)}
         </tbody>
         */
    },

    renderRealm: function () {

    },

    getFilteredData: function () {
        var filter = this.props.filter;

        var filteredData = _.filter(this.props.realms, function (realm) {
            var containsFilterText = (realm.name.toUpperCase().indexOf(filter.filterText.toUpperCase()) !== -1);

            return containsFilterText;
        });
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