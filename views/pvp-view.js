// LIBS
var React = require('react');

// SERVICES
var characterApi = require('../services/character-api');

// COMPONENTS
var Table = require('../components/table');

var PvpView = React.createClass({

    getInitialState: function () {
        characterApi.getLeaderBoards(this.updateState);
        return {
            pvp: []
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
        return {
            rows: this.getRows(),
            rowsContent: this.getRowsContent()
        }
    },

    getRows: function () {
        return ['ranking', 'name', 'realmName','seasonLosses','seasonWins']
    },

    getRowsContent: function () {
        return this.state.pvp;
    },

    updateState: function (result) {
        console.log(result);
        this.setState({pvp: result.rows});
    }
});

module.exports = PvpView;