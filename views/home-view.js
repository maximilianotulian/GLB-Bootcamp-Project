var React = require('react');
var classNames = require('classnames');

var HomeView = React.createClass({
    render: function () {
        return (
            <div {...this.getProps()}>
                Wow project!!
            </div>
        )
    },

    getProps: function () {
        return {
            className: this.getClass()
        };
    },

    getClass: function () {
        var classes = {

        };

        return classNames(classes);
    }
});

module.exports = HomeView;