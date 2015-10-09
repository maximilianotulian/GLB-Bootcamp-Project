var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

var UnOrderedList = React.createClass({
    propsTypes: {
        items: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.object
        ]),
        title: React.PropTypes.string
    },

    render: function () {
        return (
            <div {...this.getProps()}>
                <h4 className="text-center"> {this.props.title || ''} </h4>
                <ul className="list-group">
                    {this.renderListItems()}
                </ul>
            </div>
        )
    },

    renderListItems: function () {
        var listItems = [];
        var itemIndex = 0;

        _.each(this.props.items, function (item, key) {
            listItems.push(<li {...this.getListItemProps(itemIndex)}>{key} {item}</li>);
            itemIndex += 1;
        }.bind(this));

        return listItems;
    },

    getProps: function () {
        return {
            className: this.getClass()
        }
    },

    getClass: function () {

        var classes = {

        };

        classes[this.props.className] = (this.props.className);

        return classNames(classes);
    },

    getListItemProps: function (index) {
        return {
            className: this.getListItemClass(index),
            key: index
        }
    },

    getListItemClass: function (index) {
        var classes = {
            'list-group-item': true,
            'list-group-item-success': true,
            'list-group-item-info': ((index % 2) === 0),
        };

        return classNames(classes);
    }
});

module.exports = UnOrderedList;
