// LIBS
var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

// COMPONENTS
var UnOrderedList = require('./unordered-list');

var CharacterPvp = React.createClass({
    propStyles: {
        data: React.PropTypes.oneOfType([
            React.PropTypes.object,
            React.PropTypes.array
        ])
    },

    render: function () {
        return (
            <div {...this.getProps()}>
                <h4 className="text-center">Pvp information </h4>
                <UnOrderedList {...this.getUnOrderedListProps('2v2')}/>
                <UnOrderedList {...this.getUnOrderedListProps('3v3')}/>
                <UnOrderedList {...this.getUnOrderedListProps('5v5')}/>
                <UnOrderedList {...this.getUnOrderedListProps('RBG')}/>
            </div>
        )
    },

    getProps: function () {
        return {
            className: this.getClass()
        }
    },

    getClass: function () {
        var classes = {
            'row': true,
            'panel': true,
            'panel-default': true
        };

        classes[this.props.className] = (this.props.className);

        return classNames(classes);
    },

    getItems: function (title) {
        var items;
        var key = [
            'ARENA_BRACKET_2v2',
            'ARENA_BRACKET_3v3',
            'ARENA_BRACKET_5v5',
            'ARENA_BRACKET_RBG'
        ];

        if (title === '2v2') {
            items = this.setItemInfo(key[0]);
        } else if (title === '3v3') {
            items = this.setItemInfo(key[1]);
        } else if (title === '5v5') {
            items = this.setItemInfo(key[2]);
        } else if (title === 'RBG') {
            items = this.setItemInfo(key[3]);
        }

        return items || []
    },

    getUnOrderedListProps: function (title) {

        return {
            className: this.getUnOrderedListClass(),
            items: this.getItems(title),
            title: title
        }
    },

    getUnOrderedListClass: function () {
        var classes = {
            'col-md-3': true
        };

        return classNames(classes);
    },

    setItemInfo: function (key) {
        var stats = this.props.data;
        var items = {
            Rating: stats[key].rating,
            'Season Lost': stats[key].seasonLost,
            'Season Played': stats[key].seasonPlayed,
            'Weekly Lost': stats[key].weeklyLost,
            'Weekly Played': stats[key].weeklyPlayed
        };

        return items
    }
});

module.exports = CharacterPvp;