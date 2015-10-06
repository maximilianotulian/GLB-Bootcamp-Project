// LIBS
var React = require('react');
var classNames = require('classnames');

// SERVICES
var characterApi = require('../services/character-api');

// COMPONENTS
var Table = require('../components/table');

var CharacterView = React.createClass({

    getInitialState: {
        realms: characterApi.getRealmStatus()
    },

    render: function () {
        return (
            <Table {...this.getTableProps()}/>
        )
    },

    getTableProps: function () {
        return {
            realms: this.state.realms
        }
    }
});

module.exports = CharacterView;