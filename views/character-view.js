// LIBS
var React = require('react');
var classNames = require('classnames');

// SERVICES
var characterApi = require('../services/character-api');

// COMPONENTS
var Table = require('../components/table');
var Input = require('../components/input');
var Button = require('../components/button');
var CharacterInfo = require('../components/character-info');

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
                <section {...this.getSectionProps()}>
                    <Input {...this.getInputProps()}/>
                    <Button {...this.getButtonProps()}> Find </Button>
                </section>
                <section {...this.getSectionProps()}>
                    {this.renderInfo()}
                    {this.renderStats()}
                    {this.renderPvp()}
                    {this.renderItems()}
                </section>
            </div>
        )
    },

    renderInfo: function () {
        return (
            <CharacterInfo data={this.state.data} />
        )
    },

    renderStats: function () {
        return '';
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

    getSectionProps: function () {
        return {
            className: this.getSectionClass()
        }
    },

    getSectionClass: function () {
        var classes = {

        };

        return classNames(classes);
    },
    handleClick: function () {
        characterApi.getCharacterInfo(this.updateState, this.state.name, this.state.realm);
        this.setState({name: ''});
    },

    updateState: function (result) {
        console.log(result);
        this.setState({data: result});
    }
});

module.exports = CharacterView;