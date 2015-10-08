// LIBS
var React = require('react');

// SERVICES
var characterApi = require('../services/character-api');

// COMPONENTS
var Table = require('../components/table');

var RealmView = React.createClass({

    getInitialState: function () {
        characterApi.getRealmStatus(this.updateState);
        return {
            realms: []
        }
    },

    render: function () {
        return (
            <div>
                <Table {...this.getTableProps()}/>
            </div>
        )
    },

    getTableProps: function () {
        return{
            headers: ['name' + 'status' + 'type' + 'population'],
            realms: this.state.realms
        }
    },

    updateState: function (result) {
        this.setState({realms: result.realms});
    }
});

module.exports = RealmView;