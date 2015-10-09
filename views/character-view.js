// LIBS
var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

// SERVICES
var characterApi = require('../services/character-api');

// COMPONENTS
var Table = require('../components/table');
var Input = require('../components/input');
var Button = require('../components/button');
var CharacterInfo = require('../components/character-info');
var CharacterStats = require('../components/character-stats');

var CharacterView = React.createClass({

    getInitialState: function () {

        return {
            data: [],
            name: '',
            realm: ''
        }
    },

    render: function () {
        return (
            <div >
                <section>
                    <Input {...this.getInputProps()}/>
                    <Button {...this.getButtonProps()}> Find </Button>
                </section>
                {this.renderContent()}
            </div>
        )
    },

    renderContent: function () {
        var content;

        if (_.isUndefined(this.state.data.name)) {
            content = this.renderLoading();
        } else {
            content = (
                <div className="container">
                    {this.renderMainInfo()}
                    {this.renderStats()}
                    <div {...this.getDivProps()}>
                        {this.renderItems()}
                        {this.renderPvp()}
                    </div>
                </div>
            );
        }
        return content;
    },

    renderLoading: function () {
        return (
            <section>
                <h4> Insert character name and press find to see more information </h4>
            </section>
        )
    },

    renderMainInfo: function () {
        return (
            <div {...this.getDivProps()}>
                <CharacterInfo data={this.state.data}/>
            </div>
        )
    },

    renderStats: function () {
        return (
            <div {...this.getDivProps()}>
                <CharacterStats {...this.getCharacterStatsProps()}/>
            </div>
        )
    },

    renderPvp: function () {
        return (
            <div className="col-md-6 panel-body"> hola soy el pvp </div>
        )
    },

    renderItems: function () {
        return (
            <div className="col-md-6 panel-body"> hola soy los items </div>
        )
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

    getDivProps: function () {
        return {
            className: this.getDivClass()
        }
    },

    getDivClass: function () {
        var classes = {
            'row': true,
            'panel': true,
            'panel-default': true
        };

        return classNames(classes);
    },

    getCharacterStatsProps: function () {
        return {
            className: this.getCharacterStatsClass(),
            data: this.state.data.stats
        }
    },

    getCharacterStatsClass: function () {
        var classes = {

        };

        return classNames(classes);
    },

    handleInputChange: function (event) {
        this.setState({name: event.target.value});
    },

    handleClick: function () {
        characterApi.getCharacterInfo(this.updateState, this.state.name, this.state.realm);
        this.setState({name: ''});
    },

    updateState: function (result) {
        this.setState({data: result});
    }
});

module.exports = CharacterView;