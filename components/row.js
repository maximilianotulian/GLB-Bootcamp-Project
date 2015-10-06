// LIBS
var React = require('react');
var _ = require('lodash');
var classNames = require('classnames');

// COMPONENTS
var Link = require('react-router').Link;

var Row = React.createClass({

    propTypes: {},

    render: function () {

        return (
            <tr {...this.getProps()}>
                {this.renderData()}
            </tr>
        );
    },
    renderData: function () {
        /* <td>
         {movie.title}
         </td>
         <td>
         {movie.genre}
         </td>
         <td>
         {movie.rating}
         </td>
         <td>
         <button type="button" onClick={this.handleDeleteClick}> Delete </button>
         </td>
         <td>
         <Link to={`/edit/${index}`}> Edit </Link>
         </td>*/
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
    }


});

module.exports = Row;