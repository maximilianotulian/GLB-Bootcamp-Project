var React = require('react');
var classNames = require('classnames');

var HomeView = React.createClass({
    render: function () {
        return (
            <div {...this.getProps()}>
                <h2>First project - Globant Bootcamp </h2>
                <div className="panel-body">
                    <h4></h4>
                </div>
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
            'panel': true,
            'panel-default': true
        };

        return classNames(classes);
    }
});

module.exports = HomeView;