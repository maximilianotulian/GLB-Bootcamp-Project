// LIBS
var React = require('react');

// SERVICES
var characterApi = require('../services/characterApi');

var RealmView = React.createClass({

    render: function () {
        characterApi..getLeaderBoards();
        return (
            <div>

            </div>
        )
    },

    getTableProps: function () {

    }
});

module.exports = RealmView;