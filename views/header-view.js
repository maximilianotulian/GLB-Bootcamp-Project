// LIBS
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var classNames = require('classnames');

var HeaderView = React.createClass({
    render: function () {
        return (
            <ul {...this.getProps()}>
                <li>
                    <Link to="home">Home</Link>
                </li>
                <li>
                    <Link to="realm">Realm</Link>
                </li>
                <li>
                    <Link to="character">Character</Link>
                </li>
                <li>
                    <Link to="challenge">Challenge</Link>
                </li>
                <li>
                    <Link to="pvp">PVP</Link>
                </li>
                <li>
                    <Link to="guild">Guild</Link>
                </li>
            </ul>
        )
    },

    getProps: function () {
        return {
            className: this.getClass()
        }
    },

    getClass: function () {
        var classes = {
            'nav': true,
            'navbar-nav': true
        };

        return classNames(classes);
    }

});

module.exports = HeaderView;