//LIBS
var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

var CharacterInfo = React.createClass({

    propTypes: {
        data: React.PropTypes.oneOfType(
            React.PropTypes.array,
            React.PropTypes.object
        )
    },

    render: function () {
        var data = this.props.data;

        return (
            this.renderCharacterApi()
        )
    },

    renderCharacterApi: function () {
        var content;
        var data = this.props.data || [];

        if (_.isUndefined(data.name)) {
            console.log('data 0');
            content = this.renderLoading();
        } else {
            console.log('data llena');
            content =
                (
                    <section {...this.getSectionProps()}>
                        <div className="col-md-2">
                            <div {...this.getDivProps}>
                                <img {...this.getImgProps()}/>
                            </div>
                            <button{...this.getButtonProps()}> {data.level} </button>
                        </div>
                        <div {...this.getDivWrapperProps()}>
                            <h4> {data.name} </h4>

                            <p> Class: {data.class}</p>

                            <p> Gender: {data.gender}</p>

                            <p> Race: {data.race}</p>

                            <p> Achievement Points: {data.achievementPoints} </p>
                        </div>
                    </section>
                );
        }
        return content;
    },

    getSectionProps: function () {
        return {
            className: this.getSectionClass()
        }
    },

    getSectionClass: function () {
        var classes = {
            'col-md-12': true,
            'panel': true
        };

        return classNames(classes);
    },

    getDivProps: function () {
        return {
            className: this.getDivClass()
        }
    },

    getDivClass: function () {
        var classes = {
            'item': true
        };

        return classNames(classes);
    },

    getButtonProps: function () {
        var props = this.props;

        return {
            className: this.getButtonClass()
        }
    },

    getButtonClass: function () {
        var classes = {
            'col-md-2': true,
            'button': true
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
            'image': true
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
            'col-md-8': true
        };

        return classNames(classes);
    },

    renderLoading: function () {
        return (
            <section>
                <h3> Ingrese un nombre </h3>
            </section>
        )
    }
});

module.exports = CharacterInfo;