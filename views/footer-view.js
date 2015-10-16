var React = require('react');
var Glyphicon = require('../components/glyphicon');
var classNames = require('classnames');

var FooterView = React.createClass({
    render: function () {
        return (
            <div {...this.getProps()}>
                <div>
                    <span className="footer-view--author">Created by: Maximiliano Tulian </span>
                    <span className="footer-view--mail">Contact information: <a href="mailto:maxtulian9@gmail.com">maxtulian93@gmail.com</a></span>
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
            'footer-view': true
        };

        return classNames(classes);
    }
});

module.exports = FooterView;