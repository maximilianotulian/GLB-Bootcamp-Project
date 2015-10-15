//LIBS
var React = require('react');
var classNames = require('classnames');

var Glyphicon = React.createClass({

    render: function () {
        return (
            <span {...this.getSpanProps()}/>
        );
    },

    getSpanProps: function () {
        return {
            className: this.getSpanClass()
        }
    },

    getSpanClass: function () {
        var classes = {
            'glyphicon': true,
            'glyphicon-heart': true
        };

        classes[this.props.classNames] = (this.props.classNames);

        return classNames(classes);
    }

});

module.exports = Glyphicon;