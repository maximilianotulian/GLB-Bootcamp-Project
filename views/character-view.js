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
            characterInfo: [],
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
                    <Table {...this.getTableProps()}/>
                </section>
            </div>
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
            onChange: this.handleInputChange
        }
    },

    getTableProps: function () {

    },

    handleInputChange: function (event) {
        this.setState({name: event.target.value});
    },

    handleClick: function () {
        characterApi.getCharacterInfo(this.updateState, this.state.name, this.state.realm);
        this.setState({name: ''});
    },

    updateState: function (result) {
        this.setState({characterInfo: result});
    }
});

module.exports = CharacterView;