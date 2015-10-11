//LIBS
var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

// SERVICES
var characterApi = require('../services/character-api');

// COMPONENTS
var Table = require('../components/table');

var ChallengeView = React.createClass({

    getInitialState: function () {
        characterApi.getChallengeRealm(this.updateState);

        return {
            challenge: [],
            index: 0
        }
    },

    render: function () {
        return (
            <div>
                {this.renderHeader()}
                <Table {...this.getTableProps()} />
            </div>
        )
    },

    renderHeader: function () {
        var name = 'Loading...' ;
        var realm = '';
        var timezone = '';
        var challenge;

        if (this.state.challenge[this.state.index]) {
            challenge = this.state.challenge[this.state.index];
            if (challenge.map && challenge.map.name) {
                name = challenge.map.name;
            }
            if (challenge.realm && challenge.realm.name && challenge.realm.timezone) {
                realm = this.state.challenge[this.state.index].realm.name;
                timezone = this.state.challenge[this.state.index].realm.timezone;
            }
        }

        return (
            <div >
                <h4 className="col-md-4">{name}</h4>
                <h4 className="col-md-4">{realm}</h4>
                <h4 className="col-md-4">{timezone}</h4>
            </div>
        )
    },

    getSpanProps: function () {

    },

    getRows: function () {
        return ['rank', 'time', 'party', 'date'];
    },

    getRowsContent: function (challengeIndex) {
        var challenge = this.state.challenge[challengeIndex];
        var groupIndex = 0;
        var filteredChallenge = [];

        for (groupIndex; groupIndex < 10; groupIndex += 1) {
            if (challenge && challenge.groups) {
                filteredChallenge.push({
                    rank: challenge.groups[groupIndex].ranking,
                    time: this.getTime(challengeIndex, groupIndex),
                    party: this.getPartyMembers(challengeIndex, groupIndex),
                    date: challenge.groups[groupIndex].date
                })
            }
        }
        return filteredChallenge;
    },

    getPartyMembers: function (challengeIndex, groupIndex) {
        var group = this.state.challenge[challengeIndex].groups[groupIndex];
        var members = '';
        var memberIndex = 0;

        for (memberIndex; memberIndex < 5; memberIndex += 1) {
            if (group.members[memberIndex].character) {
                members += ' ' + group.members[memberIndex].character.name;
            }
        }

        return members;
    },

    getTime: function (challengeIndex, groupIndex) {
        var group = this.state.challenge[challengeIndex].groups[groupIndex];
        var time = '';

        if (group.time) {
            time = group.time.hours + ':' + group.time.minutes + ':' + group.time.seconds;
        }

        return time;
    },

    getTableProps: function () {
        return {
            rows: this.getRows(),
            rowsContent: this.getRowsContent(this.state.index)
        }
    },

    updateState: function (result) {
        this.setState({
            challenge: result
        });
    }
});

module.exports = ChallengeView;