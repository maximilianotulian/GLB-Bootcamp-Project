// LIBS
var React = require('react');
var classNames = require('classnames');

// SERVICES
var characterApi = require('../services/character-api');

// COMPONENTS
var Table = require('../components/table');
var Input = require('../components/input');
var Button = require('../components/button');

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
            <div>
                <section>
                    <Input {...this.getInputProps()}/>
                    <Button {...this.getButtonProps()}> Find </Button>
                </section>
                <section>
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
            <Table {...this.getTableInfoProps()} />
        )
    },

    renderStats: function () {
        return (
            <Table {...this.getTableStatsProps()} />
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
            onChange: this.handleInputChange
        }
    },

    getTableInfoProps: function () {
        return {
            rows: ['name','achievementPoints', 'class', 'gender', 'level', 'race', 'thumbnail'],
            rowsContent: this.state.data.info
        }
    },

    getTableStatsProps: function () {
        return {
            rows: ['attack','agility', 'health', 'intelligence', 'stamina', 'strength', 'mana', 'spell'],
            rowsContent: this.state.data.stats
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
        console.log(result);
        this.setState({data: result});
    }
});

module.exports = CharacterView;