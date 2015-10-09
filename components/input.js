//LIBS
var React = require('react');
var _ = require('lodash');

var Input = React.createClass({

    propTypes: {
        onChange: React.PropTypes.func,
        value: React.PropTypes.string
    },

    getInitialState: function () {
        var initialState = {};

        if (_.isUndefined(this.props.value)) {
            initialState.value = '';
        }

        return initialState;
    },

    render: function () {
        return (
            <input {...this.getProps()}/>
        );
    },

    getProps: function () {
        return ({
            type: 'text',
            className: 'custom-input',
            value: this.getValue(),
            onChange: this.handleChange,
            placeholder: this.props.placeholder
        })
    },

    getValue: function () {
        return (_.isUndefined(this.props.value)) ? this.state.value : this.props.value;
    },

    handleChange: function (event) {
        this.props.onChange(event);
    }
});

module.exports = Input;