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
        var data = this.props.data;

        return (
            <section className="panel-body">
                <div className="col-md-2">
                    <div {...this.getDivProps}>
                        <img {...this.getImgProps()}/>
                    </div>
                    <button {...this.getButtonProps()}> {data.level}</button>
                </div>
                <div {...this.getDivWrapperProps()}>
                    <span className="panel--span"> {data.name} </span>
                    <span className="panel--span"> Class: {data.class}</span>
                    <span className="panel--span"> Gender: {data.gender}</span>
                    <span className="panel--span"> Race: {data.race}</span>
                    <span className="panel--span">Achievement Points: {data.achievementPoints}</span>
                </div>
                <div {...this.getDivWrapperProps()}>
                    <span className="panel--span"> {data.realm} </span>
                    <span className="panel--span"> Total Honorable Kills: {data.totalHonorableKills}</span>
                    <span className="panel--span"> Average Item Level: {data.items.averageItemLevel}</span>
                    <span className="panel--span"> Average Item Equipped: {data.items.averageItemLevelEquipped}</span>
                    <span className="panel--span"> Battle Group: {data.battlegroup}</span>
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
        var data = this.props.data;

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
        return {
            src: 'http://us.battle.net/static-render/us/' + this.props.data.thumbnail,
            className: this.getImgClass()
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