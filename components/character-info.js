//LIBS
var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

var CharacterInfo = React.createClass({

    propTypes: {
        data: React.PropTypes.oneOfType([
            React.PropTypes.array.isRequired,
            React.PropTypes.object.isRequired
        ])
    },

    render: function () {
        return (
            this.renderCharacterApi()
        )
    },

    renderCharacterApi: function () {
        var data = null;
        var infoName = null;
        var infoClass = null;
        var infoRace = null;
        var infoGender = null;
        var infoLevel = null;
        var infoRealm = null;
        var infoAchievement = null;
        var infoTotalHonorableKills = null;
        var infoAverageItemLevel = null;
        var infoAverageItemLevelEquipped = null;
        var infoBattleGroup = null;

        if (this.props.data) {
            data = this.props.data;
            if (!_.isUndefined(data.realm)) {
                infoRealm = data.realm;
            }
            if (!_.isUndefined(data.name)) {
                infoName = data.name;
            }
            if (!_.isUndefined(data.class)) {
                infoClass = data.class;
            }
            if (!_.isUndefined(data.race)) {
                infoRace = data.race;
            }
            if (!_.isUndefined(data.gender)) {
                infoGender = data.gender;
            }
            if (!_.isUndefined(data.level)) {
                infoLevel = data.level;
            }
            if (!_.isUndefined(data.achievementPoints)) {
                infoAchievement = data.achievementPoints;
            }
            if (!_.isUndefined(data.totalHonorableKills)) {
                infoTotalHonorableKills = data.totalHonorableKills;
            }
            if (!_.isUndefined(data.items.averageItemLevel)) {
                infoAverageItemLevel = data.items.averageItemLevel;
            }
            if (!_.isUndefined(data.items.averageItemLevelEquipped)) {
                infoAverageItemLevelEquipped = data.items.averageItemLevelEquipped;
            }
            if (!_.isUndefined(data.battlegroup)) {
                infoBattleGroup = data.battlegroup;
            }
        }

        return (
            <section className="panel-body">
                <div className="col-md-2">
                    <div {...this.getDivProps}>
                        <img {...this.getImgProps()}/>
                    </div>
                    <button {...this.getButtonProps()}> {infoLevel}</button>
                </div>
                <div {...this.getDivWrapperProps()}>
                    <span className="panel--span"> {infoName} </span>
                    <span className="panel--span"> Class: {infoClass}</span>
                    <span className="panel--span"> Gender: {infoGender}</span>
                    <span className="panel--span"> Race: {infoRace}</span>
                    <span className="panel--span">Achievement Points: {infoAchievement}</span>
                </div>
                <div {...this.getDivWrapperProps()}>
                    <span className="panel--span"> {infoRealm} </span>
                    <span className="panel--span"> Total Honorable Kills: {infoTotalHonorableKills}</span>
                    <span className="panel--span"> Average Item Level: {infoAverageItemLevel}</span>
                    <span className="panel--span"> Average Item Equipped: {infoAverageItemLevelEquipped}</span>
                    <span className="panel--span"> Battle Group: {infoBattleGroup}</span>
                </div>
            </section>
        );
    },

    getDivProps: function () {
        return {
            className: this.getDivClass()
        }
    },

    getDivClass: function () {
        var classes = {
            'panel--item': true
        };

        return classNames(classes);
    },

    getButtonProps: function () {
        return {
            className: this.getButtonClass()
        }
    },

    getButtonClass: function () {
        var classes = {
            'col-md-2': true,
            'panel--button': true
        };

        return classNames(classes);
    },

    getImgProps: function () {
        var thumbnail = '';
        var data = '';
        var name = '';

        if (!_.isUndefined(props.data)) {
            if (!_.isUndefined(props.data.thumbnail)) {
                thumbnail = 'http://us.battle.net/static-render/us/' + props.data.thumbnail;
            }
            if (!_.isUndefined(props.data.name)) {
                name = props.data.name;
            }
        }

        return {
            src: 'http://us.battle.net/static-render/us/' + thumbnail,
            className: this.getImgClass(),
            alt: 'this in a thumbnail of the character' + name
        }
    },

    getImgClass: function () {
        var classes = {
            'panel--image': true
        };

        return classNames(classes);
    },

    getDivWrapperProps: function () {
        return {
            className: this.getDivWrapperClass()
        }
    },

    getDivWrapperClass: function () {
        var classes = {
            'col-md-5': true
        };

        return classNames(classes);
    }
});

module.exports = CharacterInfo;