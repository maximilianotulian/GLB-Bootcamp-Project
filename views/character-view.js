// LIBS
var React = require('react');
var classNames = require('classnames');

// SERVICES
var characterApi = require('../services/characterApi');

// COMPONENTS
var Table = require('../components/table');

var CharacterView = React.createClass({

    render: function () {
        return (
            <div>
                Character
            </div>
        )
    }
});

module.exports = CharacterView;