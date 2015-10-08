//LIBS
var React = require('react');
var _ = require('lodash');

var Input = React.createClass({

    propTypes: {
        index: React.PropTypes.string,
        onChange: React.PropTypes.func,
        value: React.PropTypes.string
    },

    getInitialState: function () {
        var initialState = {};

        if (_.isUndefined(this.props.value)) {
            initialState.value = '';
            initialState.index = 0;
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
            className: 'input',
            value: this.getValue(),
            onChange: this.handleChange
        })
    },

    getValue: function () {
        return (_.isUndefined(this.props.value)) ? this.state.value : this.props.value;
    },

    handleChange: function (event) {
        this.props.onChange(event, this.props.index);
    }
});

module.exports = Input;