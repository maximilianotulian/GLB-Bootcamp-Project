// LIBS
var React = require('react');

// SERVICES
var characterApi = require('../services/character-api');

// COMPONENTS
var Table = require('../components/table');

var GuildView = React.createClass({

    getInitialState: function () {
        characterApi.getGuildProfile(this.updateState);
        return {
            guild: []
        }
    },

    render: function () {
        return (
            <div>
                <Table {...this.getTableProps()} />
            </div>
        )
    },

    getTableProps: function () {
        return {
            rows: this.getRows(),
            rowsContent: this.getRowsContent()
        }
    },

    getRows: function () {
        return ['battlegroup']
    },

    getRowsContent: function () {
        return [];
    },

    updateState: function (result) {
        console.log(result);
        //this.setState({pvp: result.rows});
        //http://media.blizzard.com/wow/icons/18/faction_0.jpg horde
        //http://media.blizzard.com/wow/icons/18/faction_1.jpg alianza
        //http://media.blizzard.com/wow/icons/18/faction_-1.jpg neutral
    }
});

module.exports = GuildView;
