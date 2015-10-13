// LIBS
var React = require('react');
var _ = require('lodash');

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
        var guild;
        var name;
        var level;

        if (!_.isUndefined(this.state.guild)) {
            guild = this.state.guild;
            if (!_.isUndefined(guild.name)) {
                name = guild.name;
            }
            if(!_.isUndefined(guild.level)) {
                level = guild.level
            }
        }

        return (
            <div>
                <span>{name + ' ' + level}</span>
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
        return ['thumbnail','name','race','class']
    },

    getRowsContent: function () {
        var members;
        var filteredGuild;

        if (this.state.guild.members) {
            members = this.state.guild.members.map(this.getMember);
        }
        filteredGuild = {
            members: members
        };
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

    updateState: function (result) {
        this.setState({guild: result});
        //http://media.blizzard.com/wow/icons/18/faction_0.jpg horde
        //http://media.blizzard.com/wow/icons/18/faction_1.jpg alianza
        //http://media.blizzard.com/wow/icons/18/faction_-1.jpg neutral
    }
});

module.exports = GuildView;
