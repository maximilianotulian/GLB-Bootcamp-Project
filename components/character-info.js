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
                    <h4> {data.name} </h4>
                    <p> Class: {data.class}</p>
                    <p> Gender: {data.gender}</p>
                    <p> Race: {data.race}</p>
                    <p>Achievement Points: {data.achievementPoints}</p>
                </div>
                <div {...this.getDivWrapperProps()}>
                    <h4> {data.realm} </h4>
                    <p> Total Honorable Kills: {data.totalHonorableKills}</p>
                    <p> Average Item Level: {data.items.averageItemLevel}</p>
                    <p> Average Item Equipped: {data.items.averageItemLevelEquipped}</p>
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
    },
});

module.exports = CharacterInfo;