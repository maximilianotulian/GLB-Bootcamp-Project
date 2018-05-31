// LIBS
var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

// COMPONENTS
var UnOrderedList = require('./unordered-list');

var CharacterStats = React.createClass({
    propStyles: {
        data: React.PropTypes.object
    },

    render: function () {
        return (
            <div {...this.getProps()}>
                <UnOrderedList {...this.getUnOrderedListProps('General')} />
                <UnOrderedList {...this.getUnOrderedListProps('Atack')} />
                <UnOrderedList {...this.getUnOrderedListProps('Other')} />
            </div>
        )
    },

    getProps: function () {
        return {
            className: this.getClass()
        }
    },

    getClass: function () {
        var classes = {};
        classes[this.props.className] = (this.props.className);

        return classNames(classes);
    },

    getUnOrderedListProps: function (title) {
        var items;
        var stats;
        var statStr;
        var statAgi;
        var statInt;
        var statMastery;
        var statAttackPower;
        var statCrit;
        var statDodge;
        var statHaste;
        var statHealt;
        var statMana;
        var statStamina;
        var statMultiStrike;

        if (!_.isUndefined(this.props.data)) {
            stats = this.props.data;
            if (!_.isUndefined(stats.str)) {
                statStr = stats.str;
            }
            if (!_.isUndefined(stats.agi)) {
                statAgi = stats.agi;
            }
            if (!_.isUndefined(stats.int)) {
                statInt = stats.int;
            }
            if (!_.isUndefined(stats.mastery)) {
                statMastery = stats.mastery;
            }
            if (!_.isUndefined(stats.attackPower)) {
                statAttackPower = stats.attackPower;
            }
            if (!_.isUndefined(stats.crit)) {
                statCrit = stats.crit;
            }
            if (!_.isUndefined(stats.dodge)) {
                statDodge = stats.dodge;
            }
            if (!_.isUndefined(stats.haste)) {
                statHaste = stats.haste;
            }
            if (!_.isUndefined(stats.health)) {
                statHealt = stats.health;
            }
            if (!_.isUndefined(stats.power)) {
                statMana = stats.power;
            }
            if (!_.isUndefined(stats.sta)) {
                statStamina = stats.sta;
            }
            if (!_.isUndefined(stats.multistrike)) {
                statMultiStrike = stats.multistrike;
            }
        }

        if (title === 'General') {
            items = {
                Strength: statStr,
                Agility: statAgi,
                Intelect: statInt,
                Mastery: statMastery
            };
        } else if (title === 'Atack') {
            items = {
                Attack: statAttackPower,
                Critical: statCrit,
                Dodge: statDodge,
                Haste: statHaste
            }
        } else if (title === 'Other') {
            items = {
                Health: statHealt,
                Mana: statMana,
                Stamina: statStamina,
                'Multi Strike': statMultiStrike
            }
        }

        return {
            className: this.getUnOrderedListClass(),
            items: items || [],
            title: title,
            inverted: true
        }
    },

    getUnOrderedListClass: function () {
        var classes = {
            'col-md-4': true
        };

        return classNames(classes);
    }
});

module.exports = CharacterStats;