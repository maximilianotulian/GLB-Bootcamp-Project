// LIBS
var React = require('react');
var _ = require('lodash');
var Input = require('../components/input');
var Button = require('../components/button');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

// SERVICES
var characterApi = require('../services/character-api');

// COMPONENTS
var Table = require('../components/table');

var GuildView = React.createClass({

    getInitialState: function () {
        return {
            guild: [],
            name: ''
        }
    },

    render: function () {
        var guild;
        var name;
        var level;

        if (!_.isUndefined(this.state.guild)) {
            guild = this.state.guild;
            if (!_.isUndefined(guild.name)) {
                name = guild.name;
            }
            if (!_.isUndefined(guild.level)) {
                level = guild.level
            }
        }

        return (
            <div>
                <section>
                    <Input {...this.getInputProps()}/>
                    <Button {...this.getButtonProps()}> Find </Button>
                </section>
                <span>{(name || '') + ' ' + (level || '')}</span>
                {this.renderTable()}
            </div>
        )
    },

    renderTable: function () {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>Thumbnail</th>
                    <th>Name</th>
                    <th>Race</th>
                    <th>Class</th>
                </tr>
                </thead>
                {this.renderTableBody()}
            </table>
        )
    },

    renderTableBody: function () {
        var rowsContent = this.getRowsContent() || [];
        var content = rowsContent.map(this.renderTableRow);

        return <tbody>{content}</tbody>
    },

    renderTableRow: function (row, index) {
        var rows = this.getRows();
        var content = rows.map(this.renderTableCell.bind(this, row));

        return <tr key={index}>{content}</tr>
    },

    renderTableCell: function (row, header, index) {
        var content = row[header];
        if (header === 'thumbnail') {
            content = <img alt="Thumbnail" src={content}/>;
        }
        if (header === 'name') {
            content = <Link to={'/character-player/'+content}>{content}</Link>;
        }
        return <td key={index}> {content} </td>
    },

    getTableProps: function () {
        return {
            rows: this.getRows(),
            rowsContent: this.getRowsContent()
        }
    },

    getRows: function () {
        return ['thumbnail', 'name', 'race', 'class']
    },

    getRowsContent: function () {
        var members;

        if (this.state.guild.members) {
            members = this.state.guild.members.map(this.getMember);
        }

        return members;
    },

    getMember: function (member, index) {
        var infoClass;
        var infoName;
        var infoThumbnail;
        var infoRace;
        var character;

        if (!_.isUndefined(member.character)) {
            character = member.character;
            if (!_.isUndefined(character.name)) {
                infoName = character.name;
            }
            if (!_.isUndefined(character.race)) {
                infoRace = character.race;
            }
            if (!_.isUndefined(character.class)) {
                infoClass = character.class;
            }
            if (!_.isUndefined(character.thumbnail)) {
                infoThumbnail = 'http://us.battle.net/static-render/us/' + character.thumbnail;
            }
        }

        return {
            class: infoClass,
            name: infoName,
            key: index,
            race: infoRace,
            thumbnail: infoThumbnail
        }
    },

    getButtonProps: function () {
        return {
            onClick: this.handleClick
        }
    },

    getInputProps: function () {
        return {
            value: this.state.name,
            onChange: this.handleInputChange,
            placeholder: 'Name'
        }
    },

    handleInputChange: function (event) {
        this.setState({
            name: event.target.value,
            guild: []
        });
    },

    handleClick: function () {
        characterApi.getGuildProfile(this.updateState, this.state.name);
    },

    updateState: function (result) {
        this.setState({guild: result});
        //http://media.blizzard.com/wow/icons/18/faction_0.jpg horde
        //http://media.blizzard.com/wow/icons/18/faction_1.jpg alianza
        //http://media.blizzard.com/wow/icons/18/faction_-1.jpg neutral
    }
});

module.exports = GuildView;
