// LIBS
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

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
                <table className="table">
                    <thead>
                    <tr>
                        <th>Ranking</th>
                        <th>Name</th>
                        <th>Real name</th>
                        <th>Season losses</th>
                        <th>Seasons wins</th>
                    </tr>
                    </thead>
                    {this.renderTableBody()}
                </table>
            </div>
        )
    },

    renderTableBody: function () {
        var rowsContent = this.state.pvp || [];
        var content = rowsContent.map(this.renderTableRow);

        return <tbody>  {content}  </tbody>;
    },

    renderTableRow: function (row, index) {
        var rows = ['ranking','name','realmName','seasonLosses','seasonWins'];
        var realm = row['realmName'];
        var content = rows.map(this.renderTableCell.bind(this,row,realm));

        return <tr key={index}>{content}</tr>
    },

    renderTableCell: function (row, realm, header, index) {
        var content = row[header];
        if (header === 'name') {
            content = <Link to={`/character-player/${row[header]}/realm/${realm}`}>{row[header]}</Link>;
        }
        return <td key={index}>{content}</td>
    },

    updateState: function (result) {
        this.setState({pvp: result.rows});
    }
});

module.exports = PvpView;