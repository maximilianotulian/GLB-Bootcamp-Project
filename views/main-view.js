// LIBS
var React = require('react');
var Router = require('react-router');
var classNames = require('classnames');

// VIEWS
var HeaderView = require('./header-view');
var FooterView = require('./footer-view');

// COMPONENTS
var RouteHandler = Router.RouteHandler;

var MainView = React.createClass({

    render: function () {

        return (
            <div {...this.getProps()}>
                <div className="row">
                    <HeaderView />
                </div>
                <div className="row">
                    <RouteHandler />
                </div>
                <div>
                    <FooterView />
                </div>
            </div>
         )
    },

    getProps: function () {
        return {
            className: this.getClass()
        }
    },

    getClass: function () {
        var classes = {
            'main-view': true,
            'container-fluid': true
        };

        return classNames(classes);
    }
});

module.exports = MainView;

