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
                <section >
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
                <section >
                    {this.renderMainInfo()}
                    {this.renderStats()}
                    {this.renderItems()}
                    {this.renderPvp()}
                </section>
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
            <CharacterInfo data={this.state.data} />
        )
    },

    renderStats: function () {
        console.log(this.state.data.pvp);
        console.log(this.state.data.items);
        return (
            <CharacterStats data={this.state.data.stats}/>
        )
    },

    renderPvp: function () {

    },

    renderItems: function () {

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

    getTableInfoProps: function () {
        return {

        }
    },

    getTableStatsProps: function () {
        return {

        }
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