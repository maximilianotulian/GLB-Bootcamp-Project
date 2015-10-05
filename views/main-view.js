// LIBS
var React = require('react');
var Router = require('react-router');

// VIEWS
var HeaderView = require('./header-view');
var FooterView = require('./footer-view');

// COMPONENTS
var RouteHandler = Router.RouteHandler;

var MainView = React.createClass({

     render: function () {
        return (
            <div className="container">
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
    }
});

module.exports = MainView;

