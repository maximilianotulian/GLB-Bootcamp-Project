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
                <UnOrderedList {...this.getUnOrderedListProps('General')}/>
                <UnOrderedList {...this.getUnOrderedListProps('Atack')}/>
                <UnOrderedList {...this.getUnOrderedListProps('Other')}/>
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
        var stats = this.props.data;

        if (title === 'General') {
            items = {
                Strength: stats.str,
                Agility: stats.agi,
                Intelect: stats.int,
                Mastery: stats.mastery
            };
        } else if (title === 'Atack') {
            items = {
                Attack: stats.attackPower,
                Critical: stats.crit,
                Dodge: stats.dodge,
                Haste: stats.haste
            }
        } else if (title === 'Other') {
            items = {
                Health: stats.health,
                Mana: stats.pwer,
                Stamina: stats.sta,
                'Multi Strike': stats.multistrike
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